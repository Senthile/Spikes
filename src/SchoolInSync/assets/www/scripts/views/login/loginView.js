// Includes file dependencies
define([ "jquery", "backbone", 'text!views/common/header.tpl', 'text!views/login/loginView.tpl', 'text!views/common/footer.tpl', "models/model"],
    function( $, Backbone,HeaderTemplate, LoginViewTemplate, FooterTemplate, Model) {

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

        headerTemplate: _.template(HeaderTemplate),
        template:_.template(LoginViewTemplate),
        footerViewTemplate: _.template(FooterTemplate),

        model: new Model.Login(),

       // The View Constructor
        initialize: function() {
            this.model.on('change',this.handleModelChange,this);
        },

        handleModelChange : function() {
            this.render();
            $("#" + this.$el.attr("id")).page('destroy').page();  //recreate the page
        },

        render: function() {
            console.log("login render called");
            var header = this.headerTemplate({canMoveBack: false, title: "Login"}),
                content = this.template(this.model.toJSON()),
                footer =   this.footerViewTemplate();
            this.$el.html(header + content + footer);
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