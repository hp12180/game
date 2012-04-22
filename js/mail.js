var Mail= {
	open: function(){
		Request.send({object:'mail',action:'list'});
		if(responseObj.status != 100){
			Dialog.showSlide('Error',lang._T(responseObj.error),'error');
			return false;
		}else{
			//alert(log.object_toString(responseObj.maillist));
			var body = '';
			$.each(responseObj.maillist, function(key, m) { 
				//alert(key + ': ' + log.object_toString(m));
				var localDate = new Date(m.time*1000); 
				//var localDate = Mail.getLocalTime(localDate);
				body += '<li rel="'+m.id+'"><small>'+localDate.format("m/dd/yy h:MM:ss TT")+' '+(Check.isEmpty(m.from_username) ? '' : 'From '+ m.from_username)+'</small><p>'+m.text+'</p></li>';	
			});
			$('#mail-screen .mail-holder').html('<ul class="list">'+body+'</ul>');
		}	
		$('#mail-screen').show();
		
		//$('.swipedelete').live('pageshow',function(event, ui){
			$('.list li').bind('swipe', function(e){
				var $item = $(this);

				// Check that there is no delete button on this list item
				if (!$item.children('.ui-button-red')[0]) {
					  // This disables links on the page.  If you click anywhere else, it removes the delete button
					/*$('.swipedelete').bind('tap click', function(e){
						$('.aDeleteBtn').remove();
						$('.swipedelete').unbind('tap click');
						return false;
					});*/
					// clear out any delete buttons on other lines
					$('.ui-button-red').remove();
					// create the delete button
					var $aDeleteBtn = $('<span class="ui-button-red fr">Delete</span>')
						.attr({
						'rel': $item.attr('rel')  // this tells me which list item to delete
					});
					  // add the button to the list item
					$item.prepend($aDeleteBtn);
					
					// Have the delete button delete the item           
					$('.ui-button-red').bind('tap click', function () {
						//event.preventDefault();
						var $del = $(this);
						if( Mail._delete($del.attr('rel')) ){
							$del.parent('li').slideUp(500);//.remove(); 
						}
					});
				}

				// if there was already is a delete button, remove it and let clicks function again.    
				else {
					$('.ui-button-red').remove();
					//$('.swipedelete').unbind('tap click');
				}
			});
		//});  
		
		return false;
	},
	close: function(s){
		$('#mail-screen').hide();
		$('#mail-screen .mail-holder').html('');
		return false;
	},
	_delete: function(n){
		Request.send({object:'mail',action:'delete', idn:n});
		if(responseObj.status != 100){
			Dialog.showSlide('Error',lang._T(responseObj.error),'error');
			return false;
		}else{
			//alert(n);
			return true;
		}
	},
	getLocalTime: function (gmt)  {
		var min = gmt.getTime() / 1000 / 60; // convert gmt date to minutes
		var localNow = new Date().getTimezoneOffset(); // get the timezone 
                                                      // offset in minutes            
		var localTime = min - localNow; // get the local time
		return new Date(localTime * 1000 * 60); // convert it into a date
    }

};