var lang = {
	_T: function(s){
		if(Check.isEmpty(lang[config.lang][s])){
			return s;
		}else{
			return lang[config.lang][s];
		}
	},
	en: {
		'The specified object does not exist' : 'The specified object does not exist',
		'Invalid key' : 'Invalid key',
		'No such action' : 'No such action',
		'Authorization Failed' : 'Authorization Failed',
		'Error log in the game' : 'Error log in the game',
		'Incorrect username' : 'Incorrect username',
		'Select race' : 'Select race',
		'Username already exist' : 'Username already exist',
		'Email already exist' : 'Email already exist',
		'Bed Password' : 'Bed Password',
		'Registration error' : 'Registration error',
		
		
		
		
		
		
		
		
		//Local language
		'Passwords do not match' : 'Passwords do not match'
	}
};
	