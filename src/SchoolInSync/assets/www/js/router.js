define(['jquery', 'underscore', 'backbone',
        'modules/contactus/contactusView',
        'modules/login/loginView',
        'modules/student/studentView',
        'model','jqm'],
	function($, _, Backbone,ContactUsView, LoginView,StudentView,Model) {

    'use strict';
    var Router = Backbone.Router.extend({
    //define routes and mapping route to the function
        routes: {
            '':    'showLogin',
            login: 'showLogin',
            student: 'showStudent',
            ':page/contactus': 'showContactUs',
            '*actions': 'defaultAction' //default action,mapping "/#anything"
        },
        init: true,

        showLogin : function(actions){
            var loginView = new LoginView({router: this});
            loginView.render();
            this.changePage(loginView);
        },
        showStudent : function(actions){
            var studentView = new StudentView({router: this});
            studentView.render();
            this.changePage(studentView);
        },
        showContactUs : function(actions){
            var contactUsView = new ContactUsView({router: this});
            contactUsView.render();
            this.changePage(contactUsView);
        },

        defaultAction: function(actions){
            this.showLogin();
        },
        //1. changePage will insert view into DOM and then call changePage to enhance and transition
        //2. for the first page, jQuery mobile will present and enhance automatically
        //3. for the other page, we will call $.mobile.changePage() to enhance page and make transition
        //4. argument 'view' is passed from event trigger
        changePage:function (view) {
            //add the attribute 'data-role="page" ' for each view's div
            if(view.isDialog) {
                view.$el.attr('data-role', 'dialog');
            } else {
               view.$el.attr('data-role', 'page');
            }

            //append to dom
            $('body').append(view.$el);

            if(!this.init){
                $.mobile.changePage($(view.el), {changeHash:false});
            }else{
                this.init = false;
            }


        }

    });

    return Router;
});




