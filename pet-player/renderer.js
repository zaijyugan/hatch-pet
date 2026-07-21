const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');

const CELL_W = 192, CELL_H = 208;
// 标准 9 行的状态与帧数（v2 图的 9、10 行是视线方向，播放器不使用）
const ROWS = [
  { name: 'idle',          row: 0, frames: 6 },
  { name: 'running-right', row: 1, frames: 8 },
  { name: 'running-left',  row: 2, frames: 8 },
  { name: 'waving',        row: 3, frames: 4 },
  { name: 'jumping',       row: 4, frames: 5 },
  { name: 'failed',        row: 5, frames: 8 },
  { name: 'waiting',       row: 6, frames: 6 },
  { name: 'running',       row: 7, frames: 6 },
  { name: 'review',        row: 8, frames: 6 },
];
// 单击循环切换的状态顺序
const CLICK_CYCLE = ['idle', 'waving', 'jumping', 'failed', 'waiting', 'running', 'review'];
const FPS = 8;

const petDir = new URLSearchParams(location.search).get('pet');
const manifest = JSON.parse(fs.readFileSync(path.join(petDir, 'pet.json'), 'utf8'));
const sheetPath = path.join(petDir, manifest.spritesheetPath || 'spritesheet.webp');

// 可用缩放档位（0.5x 最小），用 + / - 切换，选择会被记住
const SCALES = [0.5, 0.65, 0.8, 1, 1.5, 2, 3];
let scaleIdx = parseInt(localStorage.getItem('petScaleIdx') ?? '3', 10);
if (isNaN(scaleIdx) || scaleIdx < 0 || scaleIdx >= SCALES.length) scaleIdx = 3;
const canvas = document.getElementById('pet');
const ctx = canvas.getContext('2d');

let state = 'idle';
let frame = 0;
let lastSwap = 0;

const img = new Image();
img.src = 'file://' + sheetPath;

function rowInfo(name) { return ROWS.find(r => r.name === name); }

function applyScale() {
  const scale = SCALES[scaleIdx];
  const w = Math.round(CELL_W * scale);
  const h = Math.round(CELL_H * scale);
  canvas.width = w;
  canvas.height = h;
  localStorage.setItem('petScaleIdx', String(scaleIdx));
  ipcRenderer.send('resize', w, h);
}

function setState(name) {
  if (state !== name) { state = name; frame = 0; }
}

function tick(now) {
  if (now - lastSwap > 1000 / FPS) {
    lastSwap = now;
    const info = rowInfo(state);
    frame = (frame + 1) % info.frames;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(
      img,
      frame * CELL_W, info.row * CELL_H, CELL_W, CELL_H,
      0, 0, canvas.width, canvas.height
    );
  }
  requestAnimationFrame(tick);
}

img.onload = () => { applyScale(); requestAnimationFrame(tick); };

// —— 拖动：移动窗口，横向拖动时播放对应方向的跑步动画 ——
let dragging = false;
let moved = false;
let lastX = 0, lastY = 0;
let dragResetTimer = null;
let stateBeforeDrag = 'idle';

canvas.addEventListener('mousedown', (e) => {
  dragging = true; moved = false;
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
    setState(stateBeforeDrag);
  } else {
    // 单击：循环切换状态
    const i = CLICK_CYCLE.indexOf(state);
    setState(CLICK_CYCLE[(i + 1) % CLICK_CYCLE.length]);
  }
});

// —— 键盘 ——
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') ipcRenderer.send('quit');
  else if (e.key === '=' || e.key === '+') { scaleIdx = Math.min(SCALES.length - 1, scaleIdx + 1); applyScale(); }
  else if (e.key === '-') { scaleIdx = Math.max(0, scaleIdx - 1); applyScale(); }
  else {
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= 9) setState(ROWS[n - 1].name);
  }
});
