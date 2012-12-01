define(['jquery'], function($){
  'use strict';
  	$(document).bind("mobileinit", function () {
		$.mobile.ajaxEnabled = false;
		$.mobile.linkBindingEnabled = false;
		$.mobile.hashListeningEnabled = false;
		$.mobile.pushStateEnabled = false;
		// Remove page from DOM when it's being replaced
		$('div[data-role="page"]').live('pagehide', function (event, ui) {
			//$(event.currentTarget).remove();
		});
	});

    function onBackKeyDown() {
        if($.mobile.activePage.is('#login') ){
            navigator.app.exitApp();
        } else {
            history.back();
        }
        return false;
    }

	document.addEventListener("deviceready", function() {
         document.addEventListener("backbutton", onBackKeyDown, false);
	}, false);

});



