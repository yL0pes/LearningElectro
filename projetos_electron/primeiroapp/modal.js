const {app, BrowserWindow} = require('electron');

let pai = null;
let filho = null;

app.on('ready', () => {

    pai = new BrowserWindow({width:800, height:600});

    filho = new BrowserWindow({
        parent: pai,
        modal: true,
        width: 400,
        height: 200,

    });

})