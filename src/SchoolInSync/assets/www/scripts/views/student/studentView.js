// Includes file dependencies
define([ "jquery", "backbone", 'views/common/header/headerView', 'text!views/student/studentView.tpl', 'views/common/footer/footerView', "models/model"],
    function( $, Backbone, HeaderView, StudentViewTemplate, FooterView, Model) {

        var self = Model;
    // Extends Backbone.View
    var StudentView = Backbone.View.extend( {
        events : {
            'pageinit': "pageinit",
            'pagecreate': "pagecreate",
            'pagebeforeshow': "pagebeforeshow",
            'click a[href=#list]': "showStudentDetails"
        },

        template:_.template(StudentViewTemplate),

        collection: Model.students,

        initialize: function() {
            this.headerView =  new HeaderView({model:{canMoveBack: false, logout: true, title: "Students"}});
            this.footerView = new FooterView();
            this.collection.on('reset',this.handleModelChange,this);
        },

        handleModelChange : function() {
            this.render();
            $("#" + this.$el.attr("id")).page('destroy').page(); //recreate the page
        },

        render: function() {
            this.$el.html(this.template({students:this.collection.toJSON()}));

            this.headerView.setElement(this.$("div[data-role='header']")).delegateEvents();
            this.footerView.setElement(this.$("div[data-role='footer']")).delegateEvents();

            this.headerView.render();
            this.footerView.render();

            return this;
        },

        pagecreate : function() {
            console.log("studentpage: pagecreate");
        },

        pageinit : function() {
            console.log("studentpage: pageinit");
        },

        pagebeforeshow: function() {
            var self=this;
            if(!this.collection.length) {
                this.collection.fetch({
                    error: function() {
                        self.handleModelChange();
                    }
                });
            }
            console.log("studentpage: pagebeforeshow");
        },

        showStudentDetails: function(e) {
            e.preventDefault();
            var studentId = $(e.currentTarget).data("identity");
            MobileRouter.navigate("studentDetails?id=" + studentId , {trigger:true});
        }

    });

    // Returns the View class
    return StudentView;
} );