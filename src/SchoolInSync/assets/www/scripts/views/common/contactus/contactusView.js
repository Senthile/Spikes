// Includes file dependencies
define([ "jquery", "backbone", 'text!views/common/contactus/contactusView.tpl'],
    function( $, Backbone, ContactusViewTemplate) {

        // Extends Backbone.View
        var ContactusView = Backbone.View.extend( {
            events : {
                'click a': 'handleContactus'
            },

            template:_.template(ContactusViewTemplate),

            // The View Constructor
            initialize: function() {
            },

            render: function() {
                console.log("contactus render called");
                var content = this.template();
                this.$el.html(content);
                return this;
            },

            handleContactus: function(e) {
                e.preventDefault();
                window.history.go(-1);
            }

        } );
        // Returns the View class
        return ContactusView;

    });
