define(['jquery'], function($){
  	$(document).bind('mobileinit', function () {
		$.mobile.ajaxEnabled = false;
		$.mobile.linkBindingEnabled = false;
		$.mobile.hashListeningEnabled = false;
		$.mobile.pushStateEnabled = false;
		// Remove page from DOM when it’s being replaced
		$('div[data-role="page"]').live('pagehide', function (event, ui) {
			$(event.currentTarget).remove();
		});
	});
});