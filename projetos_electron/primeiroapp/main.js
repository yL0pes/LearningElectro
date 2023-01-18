const { app, BrowserWindow } = require('electron');
const path = require('path');
const os = require('os');


document.getElementById("login-button").addEventListener("click", function(e) {
  e.preventDefault();
  
  window.location.href = "./pagina1/pagina.html"
  
}


function createMainWindow () {
    const janela = new BrowserWindow({
      autoHideMenuBar: true,
        width: 800,
        height: 600,
        icon: __dirname + '/images/icon.png',

    })

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
