const { app, shell, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const ipc = ipcMain;


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 576,
    frame: false,
    // transparent: true,
    title: "Phase Client",
    icon: "./src/assets/img/logo.ico",
    resizable: false,
    webPreferences: {
      nodeIntegration: true, // is default value after Electron v5
      contextIsolation: false, // protect against prototype pollution
      enableRemoteModule: true, // turn off remote
      preload: path.join(__dirname, "preload.js") // use a preload script
    }
  });

  setTimeout(() => {
    mainWindow.setSize(1280, 720);
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
  }, 4000)

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'splashscreen.html'));

  ipc.on('minimizeApp', () => {
    // console.log("clicked");
    mainWindow.minimize();
  });
  
  ipc.on('closeApp', () => {
    // console.log("clicked");
    mainWindow.close();
  });
  
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);



// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});