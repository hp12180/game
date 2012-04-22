var Screens= {
	showMain: function () {
		$("#mainScreen").show();
	},
	hideMain: function () {
		$("#mainScreen").hide();
	},
	showLoginScreen: function(){
		$("#overflow").show();
		$('#loginScreen').show();
	},
	closeLoginScreen: function(){
		$("#overflow").hide();
		$('#loginScreen').hide();
	},
	showRegistrationScreen: function(){
		$('#registerScreen').show();
	},
	hideRegistrationScreen: function(){
		$('#registerScreen').hide();
	},
	showForgotScreen: function(){
		Screens.closeLoginScreen();
		$("#overflow").show();
		$('#forgotScreen').show();
	},
	closeForgotScreen: function(){
		$("#overflow").hide();
		$('#forgotScreen').hide();
	},
	showVillage: function(){
		$('#content').addClass('village');
		$('#village-map').show();
	},
	hideVillage: function(){
		$('#village-map').hide();
		$('#content').removeClass('village');
	},
	showHouse: function(){
		Screens.hideVillage();
		$('#content').addClass('house');
		$('#house-map').show();
	},
	closeHouse: function(){
		$("#house-map").hide();
		$('#content').removeClass('house');
		Screens.showVillage();
	},
	showBuilding: function(s){
		Screens.hideVillage();
		$('#content').addClass('building');
		$('#'+s+'-building').show();
	},
	closeBuilding: function(s){
		$('#'+s+'-building').hide();
		$('#content').removeClass('building');
		Screens.showVillage();
	},
	openScreen: function(s){
		$('#'+s+'-screen').show();
		return false;
	},
	closeScreen: function(s){
		$('#'+s+'-screen').hide();
		return false;
	}
};