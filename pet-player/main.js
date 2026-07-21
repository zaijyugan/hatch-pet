const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

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

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
