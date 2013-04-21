// Includes file dependencies
define([ "jquery","backbone", "views/login/loginView", 'views/student/studentView', 'views/studentDetails/studentDetailsView',
         'views/common/contactus/contactusView'  ],
    function( $, Backbone, LoginView, StudentView, StudentDetailsView, ContactusView ) {

    // Extends Backbone.Router
    var MobileRouter = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {
            this.loginView = new LoginView({el: "#login"});
            this.studentView = new StudentView({el: "#student"});
            this.studentDetailsView = new StudentDetailsView({el: "#studentDetails"});
            this.contactusVew = new ContactusView({el:"#contactus"});
            this.contactusVew.render();

           // Tells Backbone to start watching for hashchange events
            Backbone.history.start();
        },

        // Backbone.js Routes
        routes: {
            // When there is no hash bang on the url, the home method is called
            "": "login",
            "login" : "login",
            "student" : "student",
            "contactus" : "contactus",
            "studentDetails?:studentId": "studentDetails"
        },

        login: function() {
            console.log("login router called");
            $.mobile.changePage( "#login");
        },

        student : function() {
            console.log("student router called");
            $.mobile.changePage( "#student");
        },

        studentDetails: function(studentId) {
            console.log("student router called with " + studentId);
            $.mobile.changePage( "#studentDetails");
        },

        contactus : function() {
            console.log("contactus router called");
            $.mobile.changePage('#contactus');
        },

        getUrlParam : function(name) {
            var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
            return results[1] || 0;
        }
    } );

    // Returns the Router class
    return MobileRouter;

} );