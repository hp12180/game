var responseObj = {};
$(function () {
	/*db.init();
	//alert(config.dbTables[0]);
	db.exec('SELECT * FROM '+config.dbShortName+' WHERE name=\'user\' ;', null, 
		function (transaction, results){
			alert(log.object_toString(results.rows));
			//Auth.doLogin(results.username, results.password, results.uuid);
		},
		function (transaction, results){
			db.createTables();
			Auth.showRegistrationScreen();
		}
	);*/	
	if (Modernizr.localstorage) {
		if(Check.isEmpty(localStorage.getItem('username')) || Check.isEmpty(localStorage.getItem('password'))  || Check.isEmpty(localStorage.getItem('id')) ){
			Screens.showRegistrationScreen();
		}else{
			Auth.getUser();
		}
		
		if (navigator.onLine == false) {
			//alert("You dont have a connection to the internet. Please connect via WiFi/3G and try again.", "Internet Connection Required.")
		}
		
		$(document).bind("setnetwork_status", function (b, a) {
			$("#offline_icon").toggle(a[2]);
		});
		
		Timers.init();
	}else{
		alert('Browser do not supported');
	}	
});

//Disable Scrolling
/*document.addEventListener("touchmove", function (a) {
    a.preventDefault();
    return false;
}, false);*/