// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'model',
  '../modules/login/loginView',
  'jqm'
], function ($, _, Backbone, Model,LoginView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            '/login': 'showLogin',
            '/details': 'showDetails',

            // Default
            '*actions': 'defaultAction'
        },
        init:true,
        //1. changePage will insert view into DOM and then call changePage to enhance and transition
        //2. for the first page, jQuery mobile will present and enhance automatically
        //3. for the other page, we will call $.mobile.changePage() to enhance page and make transition
        //4. argument 'view' is passed from event trigger
        changePage:function (view) {
            //add the attribute 'data-role="page" ' for each view's div
            view.$el.attr('data-role', 'page');
            //append to dom
            $('body').append(view.$el);

            if(!this.init){
                $.mobile.changePage($(view.el), {changeHash:false});
            }else{
                this.init = false;
            }
        }
    });

    var initialize = function () {
        var app_router = new AppRouter;

        app_router.on('showLogin', function () {
            var loginView = new LoginView();
            loginView.render();
            app_router.changePage(loginView);
        });

        app_router.on('showDetails', function () {

        });

        app_router.on('defaultAction', function (actions) {
            // We have no matching route, lets just log what the URL was
            console.log('No route:', actions);
        });

        Backbone.history.start();
    };



    return {
        initialize: initialize
    };
});