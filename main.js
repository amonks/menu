var menubar = require('menubar');
var ipc = require('ipc');

var mb = menubar({dir: __dirname});

// // this makes the chrome devtools show up
// mb.once('show', function () {
//   mb.window.openDevTools();
// });

mb.on('ready', function ready () {
  console.log('app is ready'); // shows up in terminal with `npm start`
  // put stuff here i guess?
});

ipc.on('terminate', function terminate (ev) {
  mb.app.terminate();
});
