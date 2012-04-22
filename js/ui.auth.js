var Auth= {
	doLogin: function () {
		var username = $('#loginUsername').val();
		var password = $('#loginPassword').val();
		
		if(Check.isEmpty(username) || !Check.username(username)){
			Dialog.showSlide('Error',lang._T('Incorrect username'),'error');
			return false;
		}		
		if(Check.isEmpty(password) || !Check.password(password)){
			Dialog.showSlide('Error',lang._T('Bed Password'),'error');
			return false;
		}		
		Request.send({object: 'auth', action: 'login', username:username, password:password});
		if(responseObj.status != 100){
			Dialog.showSlide('Error',lang._T(responseObj.error),'error');
			return false;
		}else{
			localStorage.setItem('username', responseObj.state.user.username);
			localStorage.setItem('password', responseObj.state.user.password);
			localStorage.setItem('id', responseObj.state.user.id);
			//$('#mainScreen').html('<button onclick="Auth.doLogout();">Logout</button>');
			
			Main.refreshAll();
			Screens.hideRegistrationScreen();
			Screens.closeLoginScreen();
			$('#content').addClass('village');
			Screens.showMain();
			return false;
		}
	},
	doForgot: function () {
		var email = $('#forgotEmail').val();
		
		if(Check.isEmpty(email) || !Check.email(email)){
			Dialog.showSlide('Error',lang._T('Incorrect email'),'error');
			return false;
		}
		
		Request.send({object: 'auth', action: 'forgot', email:email});
		if(responseObj.status != 100){
			Dialog.showSlide('Error',lang._T(responseObj.error),'error');
			return false;
		}else{
			Dialog.showSlide('Success',lang._T('New password sent'),'success');
			Screens.closeForgotScreen();
			return false;
		}
		
		return false;
	},
	doRegister: function () {
		var race = $('input:radio[name=regRaceSex]:checked').val();
		var username = $('#regUsername').val();
		var password = $('#regPassword').val();
		var password2 = $('#regPassword2').val();
		
		//Validation
		if(Check.isEmpty(race)){
			Dialog.showSlide('Error',lang._T('Select race'),'error');
			return false;
		}
		if(Check.isEmpty(username) || !Check.username(username)){
			Dialog.showSlide('Error',lang._T('Incorrect username'),'error');
			return false;
		}		
		if(Check.isEmpty(password) || !Check.password(password)){
			Dialog.showSlide('Error',lang._T('Bed Password'),'error');
			return false;
		}		
		if(password != password2){
			Dialog.showSlide('Error',lang._T('Passwords do not match'),'error');
			return false;
		}
		
		Request.send({object: 'auth', action:'register', race:race, username:username, password:password});
		
		if(responseObj.status != 100){
			Dialog.showSlide('Error',lang._T(responseObj.error),'error');
			return false;
		}else{
			localStorage.setItem('username', responseObj.state.user.username);
			localStorage.setItem('password', responseObj.state.user.password);
			localStorage.setItem('id', responseObj.state.user.id);
			//$('#mainScreen').html('<button onclick="Auth.doLogout();">Logout</button>');
			Main.refreshAll();			
			$('#content').addClass('village');
			Screens.hideRegistrationScreen();
			Screens.showMain();
		}
		
	},
	getUser: function () {
		Request.send({});
		if(responseObj.status != 100){
			Screens.showRegistrationScreen();
			return false;
		}else{
			//$('#mainScreen').html('<button onclick="Auth.doLogout();">Logout</button>');
			Main.refreshAll();
			Screens.hideRegistrationScreen();
			$('#content').addClass('village');
			Screens.showMain();
			return false;
		}
	},
	doLogout: function () {
		localStorage.clear();
		$('#content').removeClass('village');
		Screens.showRegistrationScreen();
		Screens.hideMain();
		return false;
	}
};