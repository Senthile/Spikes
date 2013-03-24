// Includes file dependencies
define([ "jquery", "backbone", 'text!views/common/header.tpl', 'text!views/student/studentView.tpl', 'text!views/common/footer.tpl', "models/model"],
    function( $, Backbone, HeaderTemplate, StudentViewTemplate, FooterTemplate, Model) {

    // Extends Backbone.View
    var StudentView = Backbone.View.extend( {
        events : {
            'pageinit'  : "pageinit",
            'pagecreate' : "pagecreate",
            'pagebeforeshow' : 'pagebeforeshow'
        },

        headerTemplate: _.template(HeaderTemplate),
        template:_.template(StudentViewTemplate),
        footerViewTemplate: _.template(FooterTemplate),

        model: new Model.Students(),

        initialize: function() {
            this.model.on('reset',this.handleModelChange,this);

        },

        handleModelChange : function() {
            this.render();
            $("#" + this.$el.attr("id")).page('destroy').page(); //recreate the page
        },

        render: function() {
            var header = this.headerTemplate({canMoveBack: true, title: "Students"}),
                content = this.template({students:this.model.toJSON()}),
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
            this.model.fetch({
                error: function() {
                    self.handleModelChange();
                }
            });
            console.log("studentpage: pagebeforeshow");
        }

    });

    // Returns the View class
    return StudentView;
} );