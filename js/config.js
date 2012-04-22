var config = {
    debug: false,
    logToDevice: false,
	logType: 'alert',// none, device, alert, navigator, console
    isOnDevice: true,
    support_Email: "support@try.com",
	gameName: "Fledge",
    version: "1.0.0",
	lang: 'en',
	live: 1, // 1-on / 0-off
	gamePaused: false,
	/* XHR */
	gameURL: 'http://try.com/',
	timeout: 10000,
	dataType: 'json',
	/*	Database */
	useDB: false,
	dbShortName: 'fl_db',
	dbVersion: '1.0',
	dbDisplayName: 'Fledge', 
	dbMaxSize: false, // 100*1024*1024
	dbTables:{
		user: [
			['id', 'INTEGER PRIMARY KEY'],
			['username', 'VARCHAR'],
			['password', 'VARCHAR'],
			['uuid', 'VARCHAR']
		]
	},
	
	/*prices:{
		power : 3.9,
		defence	: 1.2,
		agility	: 1,
		mass	: 1.98,
		skill	: 2.5;
	}*/
};
//quack vs chick