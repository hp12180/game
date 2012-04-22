var Request = {
	send: function (rData, rUrl, rType) {
		//rData.uid = '12355'; //replace to DeviceInfo.uuid;
		rData.version = config.version;
		rData.live = config.live;
		if(rData.object != 'auth'){
			rData.username = localStorage.getItem('username');
			rData.password = localStorage.getItem('password');
		}
		$.ajax({
            url: rUrl || config.gameURL,
            data: rData,
            type: rType || "POST",
			timeout: config.timeout,
			dataType: config.dataType,
			async: false,
			beforeSend: function(XMLHttpRequest){
				return;
			},
            success: function (respond, textStatus){
				//alert('Here: '+log.object_toString(respond));
				if(textStatus == 'success' || textStatus == 'notmodified'){
					responseObj = respond;
					var now = new Date();
					Timers.lastRequest =(Math.round(now.getTime()/1000));
					return;
				}else if(status == 'timeout'){
					alert('Server Timeout.\n Please try again.');
					return;
				}else{
					alert('An unknown error occurred while processing the request on the server. The status returned from the server was: '+status);
					return;
				}
				return;
            },
            error: function(xhr, ajaxOptions, thrownError){
				alert('An unknown error occurred while processing the request on the server. The status returned from the server was: \n '+ajaxOptions+' - '+thrownError);
				return;
            }
        });
		return;
	}
};