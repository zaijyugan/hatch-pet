const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');
const fs = require('fs');

// 本播放器完全本地运行，无需联网。关闭 Chromium 后台联网/遥测，
// 避免在离线或受限网络下打印一堆无害的 SSL/net_error 红字。
app.commandLine.appendSwitch('disable-features', 'OptimizationHints,MediaRouter,Translate,DialMediaRouteProvider');
app.commandLine.appendSwitch('disable-component-update');
app.commandLine.appendSwitch('disable-domain-reliability');
app.commandLine.appendSwitch('disable-background-networking');
app.commandLine.appendSwitch('metrics-recording-only');
app.commandLine.appendSwitch('log-level', '3');

let win;

// 决定播放哪个宠物：
// 1) 命令行参数指定的目录优先；
// 2) 否则用同级的 mochi-a（如果存在）；
// 3) 否则自动挑同级第一个包含 pet.json 的宠物文件夹（朋友的独立包就是这种）。
function resolvePetDir() {
  if (process.argv[2]) return path.resolve(process.argv[2]);
  const parent = path.join(__dirname, '..');
  const preferred = path.join(parent, 'mochi-a');
  if (fs.existsSync(path.join(preferred, 'pet.json'))) return preferred;
  try {
    for (const name of fs.readdirSync(parent)) {
      if (name === 'pet-player') continue;
      const cand = path.join(parent, name);
      try {
        if (fs.statSync(cand).isDirectory() && fs.existsSync(path.join(cand, 'pet.json'))) {
          return cand;
        }
      } catch { /* 跳过无法访问的项 */ }
    }
  } catch { /* 读不到父目录就用回退 */ }
  return preferred;
}
const petDir = resolvePetDir();

function createWindow() {
  console.log('[pet] pet dir =', petDir);
  win = new BrowserWindow({
    width: 192,
    height: 208,
    center: true,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    hasShadow: false,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.webContents.on('did-finish-load', () => console.log('[pet] page loaded OK'));
  win.webContents.on('did-fail-load', (e, code, desc) => console.error('[pet] page FAILED to load:', code, desc));
  win.webContents.on('render-process-gone', (e, d) => console.error('[pet] renderer gone:', JSON.stringify(d)));
  win.loadFile('index.html', { query: { pet: petDir } });
}

ipcMain.on('move-by', (e, dx, dy) => {
  const [x, y] = win.getPosition();
  win.setPosition(x + dx, y + dy);
});

ipcMain.on('resize', (e, w, h) => {
  win.setSize(w, h);
});

ipcMain.on('quit', () => app.quit());

// 供漫游行为查询窗口位置与屏幕可用范围
ipcMain.handle('get-bounds', () => {
  const [x, y] = win.getPosition();
  const work = screen.getPrimaryDisplay().workArea;
  return { x, y, work };
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
