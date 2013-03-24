define([ "jquery", "backbone"],function( $, Backbone) {

    var baseUrl = 'http://localhost:57767/School',
         loginUrl = baseUrl + '/login',
         studentsUrl = baseUrl + "/getStudents";

    var Login = Backbone.Model.extend({
        url: loginUrl,
        defaults: {
            userId: "",
            password: "",
            result: ""
        },
        doAuthenticate: function (options) {
            this.save({}, options);
        }
    });

    var Student =  Backbone.Model.extend({
        defaults: {
            studentId: "",
            firstName: "",
            lastName: "",
            std: ""
        }
    });

    var Students = Backbone.Collection.extend({
        url: studentsUrl,
        model: Student
    });


    return {
        Login: Login,
        Student: Student,
        Students: Students
    };

});