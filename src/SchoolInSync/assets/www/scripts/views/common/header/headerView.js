// Includes file dependencies
define([ "jquery", "backbone", 'text!views/common/header/headerView.tpl', "models/model"],
    function( $, Backbone, HeaderViewTemplate, Model) {

        // Extends Backbone.View
        var HeaderView = Backbone.View.extend( {
            events : {
                'click #logout': 'handleLogout'
            },

            //el: $("<div data-role='header' data-position='fixed'></div>"),

            template:_.template(HeaderViewTemplate),

            // The View Constructor
            initialize: function() {
            },

            render: function() {
                console.log("header render called");
                var content = this.template(this.model);
                this.$el.html(content);
                return this;
            },

            handleLogout : function (event) {
                event.preventDefault()
                Model.login.doLogOut({
                        success: function() {
                            console.log("logout success");
                            MobileRouter.navigate("login", {trigger:true});
                        },
                        error: function(){
                            console.log("logout error");
                            MobileRouter.navigate("login", {trigger:true});
                        }
                });
                return false;
            }
        } );
        // Returns the View class
        return HeaderView;

    } );
