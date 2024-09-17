const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron')

// app.on('ready', open)
app.on('ready', () => {
  let win = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      }
  })

  win.loadFile('index.html');
  win.on('closed', () => {
    win = null;
    console.log('Cua so electron da dong.')
  })

  win.webContents.send('Hello1', ' xin chao da toi index.html')
});
ipcMain.on('Hello', (event, argument) => {
  console.log(argument + " go to school College")
})
