var Dialog= {
	showSlide: function (title,text,type) {
		$('#msgSlide h1').html(title);
		$('#msgSlide p').html(text);
		$('#msgSlide').removeClass(''+type+'Slide');
		$('#msgSlide').addClass(''+type+'Slide').slideDown(500).delay(1000).slideUp(500);
	},
	openModal: function (g, f) {
        $("#modalDialog h1 span").html(g);
        $("#modalDialog .content").html(f);
        $("#modalDialog .box").removeClass().addClass("box");
		$("#overflow").show();         
        $("#modalDialog").show();    
    },
    closeModal: function () {
        $("#modalDialog").hide();
		$("#overflow").hide();
		$("#modalDialog h1 span").html('');
        $("#modalDialog .content").html('');
    },
	showNativeInfo: function(title,text){
		Notification.prototype.alert(text, title, "Ok");	
	},
	showNativeConfirm: function(title,text){
		Notification.prototype.alert(text, title, "Ok");	
	}
};