var menubar = require('menubar');

var mb = menubar({dir: __dirname});

var ipc = require('ipc');

mb.on('ready', function ready () {
  console.log('app is ready');
});

mb.once('show', function () {
  mb.window.openDevTools();
});

ipc.on('terminate', function terminate (ev) {
  canQuit = true;
  mb.app.terminate();
});
