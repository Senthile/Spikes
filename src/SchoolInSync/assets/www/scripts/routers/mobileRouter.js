// Includes file dependencies
define([ "jquery","backbone", "views/login/loginView", 'views/student/studentView'],
    function( $, Backbone, LoginView, StudentView ) {

    // Extends Backbone.Router
    var MobileRouter = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {
            this.loginView = new LoginView({el: "#login"});
            this.studentView = new StudentView({el: "#student"});

           // Tells Backbone to start watching for hashchange events
            Backbone.history.start();
        },

        // Backbone.js Routes
        routes: {
            // When there is no hash bang on the url, the home method is called
            "": "login",
            login : "login",
            student : "student",
            contactus : "contactus"
        },

        login: function() {
            console.log("login router called");
            $.mobile.changePage( "#login");
        },

        student : function() {
            console.log("student router called");
            $.mobile.changePage( "#student");
        },

        contactus : function() {
            console.log("contactus router called");
            $.mobile.changePage('#contactus');
        }
    } );

    // Returns the Router class
    return MobileRouter;

} );