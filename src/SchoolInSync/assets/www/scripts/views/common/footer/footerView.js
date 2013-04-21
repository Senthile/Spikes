// Includes file dependencies
define([ "jquery", "backbone", 'text!views/common/footer/footerView.tpl'],
    function( $, Backbone, FooterViewTemplate) {

        // Extends Backbone.View
        var FooterView = Backbone.View.extend( {
            events : {
                'click #contactus': 'handleContactus'
            },

            template:_.template(FooterViewTemplate),

            // The View Constructor
            initialize: function() {
            },

            render: function() {
                console.log("footer render called");
                this.$el.html(this.template());
                return this;
            },

            handleContactus: function(event) {
                MobileRouter.navigate("contactus", {trigger:true});
            }

        } );
        // Returns the View class
        return FooterView;

    });

