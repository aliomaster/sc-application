const electron = require('electron');
const {app, BrowserWindow} = electron;
//const ejs = require('ejs');
var sectionItems = require(`${__dirname}/assets/js/sections.json`);
//var ejse = require('ejs-electron');

//var sectionItems = JSON.parse(`${__dirname}/assets/js/sections.json`);

//console.dir(sectionItems);

//var ejs = new electronEjs({ sections: sectionItems });

var win = null;

app.on('window-all-closed', () => {
	if (process.platform != 'darwin') {
		app.quit();
	}
});



app.on('ready', () => {
	const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
	let winOpts = {
		width: width * .5,
		height: height * .5,
		acceptFirstMouse: true,
		titleBarStyle: 'hidden',
		//'resizable': false,
		//'kiosk': true,
	};
	if (process.platform === 'linux') {
      winOpts.icon = (`${__dirname}/assets/app-icon/png/128.png`);
    }
	win = new BrowserWindow(winOpts);
	win.loadURL(`file://${__dirname}/index.html`);
	win.setMenu(null);
	win.on('closed', () => {
		win = null;
	});
});
