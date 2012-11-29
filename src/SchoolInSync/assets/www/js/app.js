define(['jquery','underscore', 'backbone','router'],function($, _, Backbone,Router) {
	'use strict';
	var router;
	var init=function(){
		//create backbone router
		router=new Router();
		Backbone.history.start();
		//router.navigate("login");
	};
    return{
	    initialize:init,
	    getRouter: function() {
	      return router;
	    }
    };
});

