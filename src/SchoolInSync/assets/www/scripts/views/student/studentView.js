// Includes file dependencies
define([ "jquery", "backbone", 'text!views/common/header.tpl', 'text!views/student/studentView.tpl', 'text!views/common/footer.tpl'],
    function( $, Backbone,HeaderTemplate,StudentViewTemplate,FooterTemplate) {

    // Extends Backbone.View
    var StudentView = Backbone.View.extend( {
        events : {
            'pageinit'  : "pageinit",
            'pagecreate' : "pagecreate"
        },

        headerTemplate: _.template(HeaderTemplate),
        template:_.template(StudentViewTemplate),
        footerViewTemplate: _.template(FooterTemplate),

        // The View Constructor
        initialize: function() {
        },

        // Renders all of the Category models on the UI
        render: function() {
            var content = this.headerTemplate({canMoveBack: true, title: "Students"}) +
                this.template() + this.footerViewTemplate();
            this.$el.html(content);
            return this;
        },

        pageinit : function() {
            console.log("student page init");
        },

        pagecreate : function() {
            this.render();
            console.log("student page create");
        }
    });

    // Returns the View class
    return StudentView;
} );