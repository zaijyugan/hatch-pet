const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');

// 本播放器完全本地运行，无需联网。关闭 Chromium 后台联网/遥测，
// 避免在离线或受限网络下打印一堆无害的 SSL/net_error 红字。
app.commandLine.appendSwitch('disable-features', 'OptimizationHints,MediaRouter,Translate,DialMediaRouteProvider');
app.commandLine.appendSwitch('disable-component-update');
app.commandLine.appendSwitch('disable-domain-reliability');
app.commandLine.appendSwitch('disable-background-networking');
app.commandLine.appendSwitch('metrics-recording-only');
app.commandLine.appendSwitch('log-level', '3');

let win;
const petDir = path.resolve(process.argv[2] || path.join(__dirname, '..', 'mochi-a'));

function createWindow() {
  win = new BrowserWindow({
    width: 192,
    height: 208,
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
