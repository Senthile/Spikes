// Includes file dependencies
define([ "jquery", "backbone", 'text!views/common/header.tpl', 'text!views/login/loginView.tpl', 'text!views/common/footer.tpl'],
    function( $, Backbone,HeaderTemplate, LoginViewTemplate, FooterTemplate) {

    // Extends Backbone.View
    var LoginView = Backbone.View.extend( {
        events : {
            'pageinit'  : "pageinit",
            'pagecreate' : "pagecreate",
            'pageshow' : "pageshow",
            'click #btnLogin' : 'handleLogin'
        },

        headerTemplate: _.template(HeaderTemplate),
        template:_.template(LoginViewTemplate),
        footerViewTemplate: _.template(FooterTemplate),

        // The View Constructor
        initialize: function() {
        },

        // Renders all of the Category models on the UI
        render: function() {
            var content = this.headerTemplate({canMoveBack: false, title: "Login"}) +
                this.template() + this.footerViewTemplate();
            this.$el.html(content);
            return this;
        },

        pageinit : function() {
            console.log("login page init");
        },

        pagecreate : function() {
            this.render();
            console.log("login page create");
        },

        pageshow : function() {
            $("input[type='password']",this.$el).val("");
        },

        handleLogin : function (event) {
            MobileRouter.navigate("student", {trigger:true});
            //$.mobile.changePage( "#student");
        }
    } );

    // Returns the View class
    return LoginView;

} );