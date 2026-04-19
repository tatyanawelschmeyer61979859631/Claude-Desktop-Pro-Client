const { app, BrowserWindow, globalShortcut } = require('electron');

function createMainWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    win.loadURL('https://claude.ai'); // Native wrapper shell
    
    // Global shortcut orchestration
    globalShortcut.register('CommandOrControl+Shift+C', () => {
        win.show();
    });
}

app.whenReady().then(createMainWindow);