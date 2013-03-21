define([ "jquery", "backbone"],function( $, Backbone) {

    var baseUrl = 'http://localhost:57767/School',
         loginUrl = baseUrl + '/login';

    var Login = Backbone.Model.extend({
        urlRoot: loginUrl,
        defaults: {
            userId: "",
            password: "",
            result: "",
            error: "Login failed. Please try again or contact administrator."
        },
        doAuthenticate: function (options) {
            this.save({}, options);
        }
    });


    return {
        Login: Login
    };

});