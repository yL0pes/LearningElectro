const {app, BrowserWindow} = require('electron');

let janela = null

app.on('ready', () => {
    janela = new BrowserWindow({width:800, height:600});

    janela.on('resize', atualizadaDados);
    janela.on('move', atualizadaDados);

});

function atualizadaDados(){
    console.log(janela.getSize());
    console.log(janela.getPosition());
}
