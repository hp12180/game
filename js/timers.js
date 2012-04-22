/*
<script>
	$(function () {
		Timers.init();
	});
</script>
<p><a href="#" onclick="Timers.createTimer(5);">Add Timer</a></p>
<p><a href="#" onclick="Timers.init();">ReInit</a></p>
*/
var Timers = {
	lastRequest: 0,
	init: function (s) {
		var timerInterval=null;
		Timers.resetTimers(timerInterval);
		var now = new Date();
		Timers.lastRequest =(Math.round(now.getTime()/1000));
		timerInterval	=		setInterval('Timers.doTimers();',400);
	},
	resetTimers: function(timerInterval){
		if ( timerInterval ) {
			clearTimeout(timerInterval);
		}
		timerInterval = null;
	},
	
	createTimer: function (time, container) {
		var tcount = $('.js_timer').length +1;
		$('#'+container).append('<span id=\'timer_'+tcount+'\' class=\'js_timer\' timer=\''+(Timers.lastRequest+time)+'|1\'></span>');
	},
	
	doTimers: function (s) {
		$('.js_timer').each(function(index){
			var timer	=  $(this).attr('timer');
			var parts	= timer.split('|');		
			Timers.doTimer($(this),parts[0],parts[1]);
		});
	},
	
	doTimer: function (obj,eventTime,afterFunc) {
		var now 	= new Date();
		var left	= eventTime-Math.round(now.getTime()/1000);
		var time	= this.getLeftTime(left);
		obj.html(time);	
		
		if (left < 0) {
			$(obj).removeClass('js_timer');
			if(afterFunc == 1)
				setTimeout(function(){Timers.timerDone(obj)},500);
		}
	},
	
	timerDone: function (obj) {
		Request.send({});
		if(responseObj.status != 100){
			return false;
		}else{
			Main.refreshResources();
			return false;
		}
	},
	
	getLeftTime: function (seconds) {
		if (seconds<0){return '00:00:00';}

		var hour = Math.floor(seconds/3600);
		if (hour>0){seconds -= hour*3600;}
		
		var days	= "";
		if (hour>24){days = Math.floor(hour/24); hour = hour%24;}
		
		var min	= Math.floor(seconds/60);
		if (min>0){seconds	-= min*60;}

		if(seconds<10){seconds = "0"+ seconds;}

		if(min<10){min = "0"+ min;}

		if(hour<10){hour = "0"+ hour;}

		if (days>0){days = days + ":";}
		return	 days+hour +":"+min +":"+ seconds;
	}
}


