const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');

const CELL_W = 192, CELL_H = 208;
// mode: 'breathe' = 播一轮后长停顿（待机）; 'once' = 播一遍回到 idle; 'loop' = 持续循环
const ROWS = [
  { name: 'idle',          row: 0, frames: 6, fps: 4, mode: 'breathe' },
  { name: 'running-right', row: 1, frames: 8, fps: 8, mode: 'loop' },
  { name: 'running-left',  row: 2, frames: 8, fps: 8, mode: 'loop' },
  { name: 'waving',        row: 3, frames: 4, fps: 5, mode: 'once' },
  { name: 'jumping',       row: 4, frames: 5, fps: 6, mode: 'once' },
  { name: 'failed',        row: 5, frames: 8, fps: 4, mode: 'once' },
  { name: 'waiting',       row: 6, frames: 6, fps: 3, mode: 'loop' },
  { name: 'running',       row: 7, frames: 6, fps: 5, mode: 'loop' },
  { name: 'review',        row: 8, frames: 6, fps: 3, mode: 'loop' },
];
const CLICK_CYCLE = ['idle', 'waving', 'jumping', 'failed', 'waiting', 'running', 'review'];

const petDir = new URLSearchParams(location.search).get('pet');
const manifest = JSON.parse(fs.readFileSync(path.join(petDir, 'pet.json'), 'utf8'));
const sheetPath = path.join(petDir, manifest.spritesheetPath || 'spritesheet.webp');

// 缩放（0.5x 最小），+/- 切换，选择会被记住
const SCALES = [0.5, 0.65, 0.8, 1, 1.5, 2, 3];
let scaleIdx = parseInt(localStorage.getItem('petScaleIdx') ?? '3', 10);
if (isNaN(scaleIdx) || scaleIdx < 0 || scaleIdx >= SCALES.length) scaleIdx = 3;

// 自主行为开关（按 a 切换，会被记住）
let autoMode = (localStorage.getItem('petAutoMode') ?? '1') === '1';

const canvas = document.getElementById('pet');
const ctx = canvas.getContext('2d');

let state = 'idle';
let frame = 0;
let lastSwap = 0;
let pauseUntil = 0;      // breathe 停顿截止
let needsDraw = true;
let autoStopAt = 0;      // 自主进入的 loop 状态的结束时间
let nextAutoAt = 0;      // 下一次自主行为的时间
let wander = null;       // 漫游中：{dir:1|-1, remaining:px}
let dragging = false;

const img = new Image();
img.src = 'file://' + sheetPath;

function rowInfo(name) { return ROWS.find(r => r.name === name); }
function rand(a, b) { return a + Math.random() * (b - a); }

function scheduleNextAuto(now) {
  // 胆小小猫：间隔 20-50 秒才敢活动一次
  nextAutoAt = (now ?? performance.now()) + rand(20000, 50000);
}

function applyScale() {
  const scale = SCALES[scaleIdx];
  canvas.width = Math.round(CELL_W * scale);
  canvas.height = Math.round(CELL_H * scale);
  localStorage.setItem('petScaleIdx', String(scaleIdx));
  ipcRenderer.send('resize', canvas.width, canvas.height);
  needsDraw = true;
}

function setState(name) {
  if (state !== name) { state = name; frame = 0; pauseUntil = 0; needsDraw = true; }
}

function backToIdle(now) {
  wander = null;
  autoStopAt = 0;
  setState('idle');
  pauseUntil = now + 1500;
  scheduleNextAuto(now);
}

function draw(info) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(
    img,
    frame * CELL_W, info.row * CELL_H, CELL_W, CELL_H,
    0, 0, canvas.width, canvas.height
  );
}

// —— 自主行为：加权随机挑一件事做 ——
async function startAutoAction(now) {
  const roll = Math.random();
  if (roll < 0.40) {
    // 漫游：往左或往右小跑一段（不出屏幕）
    try {
      const { x, work } = await ipcRenderer.invoke('get-bounds');
      const margin = 16;
      const roomLeft = x - work.x - margin;
      const roomRight = (work.x + work.width - canvas.width - margin) - x;
      let dir = Math.random() < 0.5 ? -1 : 1;
      if (dir === -1 && roomLeft < 80) dir = 1;
      if (dir === 1 && roomRight < 80) dir = -1;
      const room = dir === 1 ? roomRight : roomLeft;
      if (room < 80) { scheduleNextAuto(now); return; }
      wander = { dir, remaining: Math.min(rand(120, 420), room) };
      setState(dir === 1 ? 'running-right' : 'running-left');
      return;
    } catch { scheduleNextAuto(now); return; }
  }
  let action;
  if (roll < 0.60) action = 'review';        // 20% 四处张望
  else if (roll < 0.75) action = 'waving';   // 15% 打个招呼
  else if (roll < 0.85) action = 'jumping';  // 10% 开心蹦一下
  else if (roll < 0.95) action = 'running';  // 10% 假装干活
  else action = 'failed';                    //  5% 突然委屈
  setState(action);
  const info = rowInfo(action);
  if (info.mode === 'loop') autoStopAt = now + rand(4000, 8000); // 持续状态几秒后收尾
}

function tick(now) {
  const info = rowInfo(state);

  // 漫游中：随帧移动窗口
  if (wander && !dragging) {
    const step = 2.2 * SCALES[scaleIdx];
    ipcRenderer.send('move-by', Math.round(wander.dir * step), 0);
    wander.remaining -= step;
    if (wander.remaining <= 0) { backToIdle(now); }
  }

  // 自主进入的持续状态到时间了就回待机
  if (autoStopAt && now >= autoStopAt) backToIdle(now);

  // 触发下一次自主行为（仅在安静待机、无交互时）
  if (autoMode && state === 'idle' && !dragging && now >= nextAutoAt) {
    startAutoAction(now);
  }

  if (needsDraw) { needsDraw = false; lastSwap = now; draw(rowInfo(state)); }

  const cur = rowInfo(state);
  if (now >= pauseUntil && now - lastSwap > 1000 / cur.fps) {
    lastSwap = now;
    const next = frame + 1;
    if (next >= cur.frames) {
      if (cur.mode === 'once') {
        backToIdle(now);
        draw(rowInfo('idle'));
      } else if (cur.mode === 'breathe') {
        frame = 0;
        pauseUntil = now + rand(3000, 7000);
        draw(cur);
      } else {
        frame = 0;
        draw(cur);
      }
    } else {
      frame = next;
      draw(cur);
    }
  }
  requestAnimationFrame(tick);
}

img.onload = () => { applyScale(); scheduleNextAuto(); requestAnimationFrame(tick); };

// —— 拖动：移动窗口，横向拖动时播放对应方向的跑步动画 ——
let moved = false;
let lastX = 0, lastY = 0;
let dragResetTimer = null;
let stateBeforeDrag = 'idle';

canvas.addEventListener('mousedown', (e) => {
  dragging = true; moved = false;
  wander = null; autoStopAt = 0;
  lastX = e.screenX; lastY = e.screenY;
  stateBeforeDrag = state;
});

window.addEventListener('mousemove', (e) => {
  if (!dragging) return;
  const dx = e.screenX - lastX;
  const dy = e.screenY - lastY;
  if (dx || dy) {
    moved = true;
    ipcRenderer.send('move-by', dx, dy);
    if (dx > 1) setState('running-right');
    else if (dx < -1) setState('running-left');
    clearTimeout(dragResetTimer);
    dragResetTimer = setTimeout(() => { if (dragging) setState(stateBeforeDrag); }, 250);
  }
  lastX = e.screenX; lastY = e.screenY;
});

window.addEventListener('mouseup', () => {
  if (!dragging) return;
  dragging = false;
  clearTimeout(dragResetTimer);
  if (moved) {
    setState(stateBeforeDrag === 'running-right' || stateBeforeDrag === 'running-left' ? 'idle' : stateBeforeDrag);
    scheduleNextAuto();
  } else {
    // 单击：循环切换状态，并推迟自主行为
    const i = CLICK_CYCLE.indexOf(state);
    setState(CLICK_CYCLE[(i + 1) % CLICK_CYCLE.length]);
    autoStopAt = 0;
    scheduleNextAuto();
  }
});

// —— 键盘 ——
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') ipcRenderer.send('quit');
  else if (e.key === '=' || e.key === '+') { scaleIdx = Math.min(SCALES.length - 1, scaleIdx + 1); applyScale(); }
  else if (e.key === '-') { scaleIdx = Math.max(0, scaleIdx - 1); applyScale(); }
  else if (e.key === 'a' || e.key === 'A') {
    autoMode = !autoMode;
    localStorage.setItem('petAutoMode', autoMode ? '1' : '0');
    if (autoMode) scheduleNextAuto();
  }
  else {
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= 9) { setState(ROWS[n - 1].name); autoStopAt = 0; scheduleNextAuto(); }
  }
});
