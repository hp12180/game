var db = {
	mydb: false,
	init: function () {
		try { 
			if (!window.openDatabase) { 
				config.useDB = false;
				log.send('DB Error: Browser do not support SQLite'); 
			} else { 
				this.mydb = openDatabase(config.dbShortName, config.dbVersion, config.dbDisplayName, config.dbMaxSize); 
			}
		} catch(e) { 
			// Error handling code goes here. 
			if (e == INVALID_STATE_ERR) { 
				// Version number mismatch. 
				log.send("DB Error: Invalid database version."); 
			} else { 
				log.send("DB Error: Unknown error "+e+"."); 
			} 
			return; 
		}
	},
	createTables: function () {
		var sql = '';
		for(var table in config.dbTables){
			db.exec('DROP TABLE IF EXISTS '+table+';\n');
			sql = 'CREATE TABLE '+table+' (';
			var fields = config.dbTables[table];
			for (var i = 0; i < fields.length; i++){
				sql += fields[i][0] + ' ' + fields[i][1] + ',';
			}
			sql = sql.slice(0, -1) + ');\n';
			db.exec(sql);
		}		
	},
	dropTables: function () {
		var sql = '';
		for(var table in config.dbTables){
			db.exec('DROP TABLE IF EXISTS '+table+';');
		}
	},
	exec: function (query, params, onSuccess, onError) {
		if(config.useDB == true){
			try {
				this.mydb.transaction(function(transaction) {
					transaction.executeSql(query, params, onSuccess , onError || db.errorHandler);
				});
			} catch(e) {
				log.send('DB Error: '+e.message);
			}
		}	
		return true;
	},
	errorHandler: function (transaction, error) {
		// returns true to rollback the transaction
		log.send('DB Error: Code: '+error.code+'\nMessage: '+error.message);
		return true;
	},
	nullHandler: function (transaction, results) {alert('null')}
};

//function sayHello(transaction, results){alert(log.object_toString(results.rows));}
//db.createTables();
	//db.exec('insert into errors (error_id,error_sender,error_time,error_text,error_query) VALUES (3,3,"11:16","error 3","error_que 3");');
	//db.exec('SELECT * FROM errors;', null, sayHello); 
	//alert(log.object_toString(config.dbTables));
	
/*	
#define SQLITE_OK           		0   - Successful result 
// beginning-of-error-codes 
#define SQLITE_ERROR        		1   - SQL error or missing database 
#define SQLITE_INTERNAL     		2   - Internal logic error in SQLite 
#define SQLITE_PERM         		3   - Access permission denied 
#define SQLITE_ABORT        		4   - Callback routine requested an abort 
#define SQLITE_BUSY         		5   - The database file is locked 
#define SQLITE_LOCKED       		6   - A table in the database is locked 
#define SQLITE_NOMEM        	7   - A malloc() failed 
#define SQLITE_READONLY     	8   - Attempt to write a readonly database 
#define SQLITE_INTERRUPT    	9   - Operation terminated by sqlite3_interrupt()
#define SQLITE_IOERR       		10   - Some kind of disk I/O error occurred 
#define SQLITE_CORRUPT     		11   - The database disk image is malformed 
#define SQLITE_NOTFOUND    	12   - Unknown opcode in sqlite3_file_control() 
#define SQLITE_FULL        		13   - Insertion failed because database is full 
#define SQLITE_CANTOPEN    	14   - Unable to open the database file 
#define SQLITE_PROTOCOL    	15   - Database lock protocol error 
#define SQLITE_EMPTY       		16   - Database is empty 
#define SQLITE_SCHEMA      		17   - The database schema changed 
#define SQLITE_TOOBIG      		18   - String or BLOB exceeds size limit 
#define SQLITE_CONSTRAINT  	19   - Abort due to constraint violation 
#define SQLITE_MISMATCH    	20   - Data type mismatch 
#define SQLITE_MISUSE      		21   - Library used incorrectly 
#define SQLITE_NOLFS       		22   - Uses OS features not supported on host 
#define SQLITE_AUTH        		23   - Authorization denied 
#define SQLITE_FORMAT      		24   - Auxiliary database format error 
#define SQLITE_RANGE       		25   - 2nd parameter to sqlite3_bind out of range 
#define SQLITE_NOTADB      		26   - File opened that is not a database file 
#define SQLITE_ROW         		100  - sqlite3_step() has another row ready 
#define SQLITE_DONE        		101  - sqlite3_step() has finished executing 
*/
	