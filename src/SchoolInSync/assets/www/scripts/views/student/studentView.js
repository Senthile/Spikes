// Includes file dependencies
define([ "jquery", "backbone", 'text!views/common/header.tpl', 'text!views/student/studentView.tpl', 'text!views/common/footer.tpl', "models/model"],
    function( $, Backbone, HeaderTemplate, StudentViewTemplate, FooterTemplate, Model) {

        var self = Model;
    // Extends Backbone.View
    var StudentView = Backbone.View.extend( {
        events : {
            'pageinit': "pageinit",
            'pagecreate': "pagecreate",
            'pagebeforeshow': "pagebeforeshow",
            'click a[href=#list]': "showStudentDetails"
        },

        headerTemplate: _.template(HeaderTemplate),
        template:_.template(StudentViewTemplate),
        footerViewTemplate: _.template(FooterTemplate),

        collection: Model.students,

        initialize: function() {
            this.collection.on('reset',this.handleModelChange,this);

        },

        handleModelChange : function() {
            this.render();
            $("#" + this.$el.attr("id")).page('destroy').page(); //recreate the page
        },

        render: function() {
            var header = this.headerTemplate({canMoveBack: false, logout: true, title: "Students"}),
                content = this.template({students:this.collection.toJSON()}),
                footer =   this.footerViewTemplate();
            this.$el.html(header + content + footer);
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