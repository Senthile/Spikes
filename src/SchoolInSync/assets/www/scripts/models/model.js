define([ "jquery", "backbone"],function( $, Backbone) {


    var baseUrl = 'http://localhost:57767/School',
         loginUrl = baseUrl + '/login',
         studentsUrl = baseUrl + "/getStudents",
         self = this;

    var login = new(Backbone.Model.extend({
        url: loginUrl,
        defaults: {
            userId: "",
            password: "",
            result: ""
        },
        doAuthenticate: function (options) {
            this.save({}, options);
        }
    }));

    var Student =  Backbone.Model.extend({
        defaults: {
            studentId: "",
            firstName: "",
            lastName: "",
            std: ""
        },
        idAttribute: "studentId"
    });

    var students = new(Backbone.Collection.extend({
        url: studentsUrl,
        model: Student,
        comparator: function(item1, item2) {
            return item1.get("studentId") > item2.get("studentId"); //ascending order
        },
        //Note: parse the response if need to modify the response
        parse: function(response) {
            return response;
        }
    }));


    return {
        login: login,
        Student: Student,
        students: students
    };

});