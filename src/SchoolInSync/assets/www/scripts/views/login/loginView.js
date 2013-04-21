// Includes file dependencies
define([ "jquery", "backbone", 'views/common/header/headerView', 'text!views/login/loginView.tpl', 'views/common/footer/footerView', "models/model"],
    function( $, Backbone,HeaderView, LoginViewTemplate, FooterView, Model) {

    // Extends Backbone.View
    var LoginView = Backbone.View.extend( {
        events : {
            //jQuery mobile page life cycle events
            'pagebeforecreate': "pagebeforecreate",
            'pagecreate': "pagecreate",
            'pageinit': "pageinit",
            'pagebeforeshow': "pagebeforeshow",
            'pageshow': "pageshow",
            'pagebeforehide': "pagebeforehide",
            'pagehide': "pagehide",
            'pageremove': "pageremove",

            'click #btnLogin': 'handleLogin',
            'change input':  'fieldChanged'
        },

        template:_.template(LoginViewTemplate),

        model: Model.login,

       // The View Constructor
        initialize: function() {
            this.headerView =  new HeaderView({ model:{canMoveBack: false, logout: false, title: "Login"}});
            this.footerView = new FooterView();
            this.model.on('change',this.handleModelChange,this);
        },

        handleModelChange : function() {
            this.render();
            $("#" + this.$el.attr("id")).page('destroy').page();  //recreate the page
        },

        render: function() {
            console.log("login render called");
            this.$el.html(this.template(this.model.toJSON()));

            this.headerView.setElement(this.$("div[data-role='header']")).delegateEvents();
            this.footerView.setElement(this.$("div[data-role='footer']")).delegateEvents();

            this.headerView.render();
            this.footerView.render();

            return this;
        },

        pagebeforecreate: function() {
            console.log("loginpage: pagebeforecreate");
        },

        pagecreate : function() {
            this.render();
            console.log("loginpage: create");
        },

        pageinit : function() {
            console.log("loginpage: init");
        },

        pagebeforeshow: function() {
            this.model.set("password","");
            console.log("loginpage: pagebeforeshow");
        },

        pageshow : function() {
            console.log("loginpage: pageshow");
        },

        pagebeforehide: function() {
            console.log("loginpage: pagebeforehide");
        },

        pagehide : function() {
            console.log("loginpage: pagehide");
            //this.model.set("password","");
        },

        pageremove: function() {
            console.log("loginpage: pageremove");
        },

        fieldChanged: function(e){
            var field = $(e.currentTarget);
            this.model.set(field.attr('id'),field.val(),{silent:true});
        },

        handleLogin : function (event) {
            var self = this;
            this.model.doAuthenticate({
                    success: function() {
                        if(self.model.get("result")==="true") {
                            Model.students.reset(undefined,{silent:true});
                            MobileRouter.navigate("student", {trigger:true});
                        }
                    },
                    error: function(data){
                        self.model.set("result", "false");
                    }
            });
        }
    } );
    // Returns the View class
    return LoginView;

} );