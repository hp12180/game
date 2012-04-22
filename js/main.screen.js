var Main= {
	refreshAll: function () {
		Main.refreshTopbar();
		Main.refreshUsername();
		Main.refreshAvatar();
		Main.refreshResources();
		return false;
	},
	refreshTopbar: function () {
		return false;
	},
	refreshResources: function () {
		if(Check.isEmpty(responseObj.state.user.silver)){
			return false;
		}
		
		$('#silver').text(responseObj.state.user.silver);
		$('#gold').text(responseObj.state.user.real);
		$('#pearl').text(responseObj.state.user.pearl);
		$('#crystal').text(responseObj.state.user.crystal);
		
		$percent_now = Math.ceil((responseObj.state.user.health_now * 100) / responseObj.state.user.health);
		$('#health-bg').css('width', Math.ceil($percent_now*1.18)+'px');
		$('#health').text($percent_now+'% ('+responseObj.state.user.health_now+')');
		return false;
	},
	refreshUsername: function () {
		if(Check.isEmpty(responseObj.state.user.username)){
			return false;
		}
		$('#avatar-username').text(responseObj.state.user.username);
		return false;
	},
	refreshAvatar: function (holder) {
		if(Check.isEmpty(responseObj.state.user.avatar)){
			return false;
		}
		if(Check.isEmpty(holder)){
			holder = 'avatar-image';
		}

		if(responseObj.state.user.race == 0){
			//$('#'+holder+' avatar-bg').addClass('avatar-sex'+responseObj.state.user.gender);
		}	
		$('#'+holder).addClass('avatar-race'+responseObj.state.user.race);
		$('#'+holder).addClass('avatar-gender'+responseObj.state.user.gender);
		return false;
	}
	
};