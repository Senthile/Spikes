define(['jquery', 'underscore', 'Backbone', 'text!views/contactUs/ContactUsView.tpl'],
    function ($, _, Backbone, ContactUsViewTemplate) {
        var ContactUsView = Backbone.View.extend({
            render: function () {
                this.$el.html(_.template(ContactUsViewTemplate));
                return this;
            }
        });
        return ContactUsView;
    });