
const { app, BrowserWindow } = require('electron');
const path = require('path');
const os = require('os');

 // on macOS
 const reactDevToolsPath = path.join(
    os.homedir(),
    '%LOCALAPPDATA%\Google\Chrome\User Data\Default\Extensionsfmkadmapgofadopljbjfkapdkoienihi\4.27.1_0'
  )
 
  app.whenReady().then(async () => {
    await session.defaultSession.loadExtension(reactDevToolsPath)
  })

const isDev = process.env.NODE_ENV !== 'development';
const isWin = process.platform === 'Win32'

function createMainWindow () {
    const janela = new BrowserWindow({
        width: 800,
        height: 600,

    })

    
      // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })


    // Install React Dev Tools
    const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

    installExtension(REACT_DEVELOPER_TOOLS).then((name) => {
        console.log(`Added Extension:  ${name}`);
    })
    .catch((err) => {
        console.log('An error occurred: ', err);
    });


 //Abre as ferramentas de desenvolvedor se está no modo de desenvolvedores
 if (isDev) {
    createMainWindow.webContents.openDevTools();
 }
//


    janela.loadFile('index.html');

}

app.whenReady().then(() =>{
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createMainWindow();
        }
      });
});

app.on('window-all-closed', () => {
    if (!Win32) {
      app.quit()
    }
  });