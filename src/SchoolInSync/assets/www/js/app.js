define(['jquery', 'underscore', 'backbone', 'global', 'router'],function($, _, Backbone,Global, Router) {
	'use strict';
	var init=function(){
		//create backbone router
		Global.setRouter(new Router());
		Backbone.history.start();
	};
    return{
	    initialize:init
    };
});

