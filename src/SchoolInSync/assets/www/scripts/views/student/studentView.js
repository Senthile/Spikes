define(['jquery', 'underscore', 'Backbone',
        'text!views/header/header.tpl', 'text!views/student/studentView.tpl', 'text!views/footer/footer.tpl',
        'views/contactUs/contactUsView'],
    function ($, _, Backbone, HeaderTemplate, StudentViewTemplate, FooterTemplate, ContactUsView) {
        var StudentView = Backbone.View.extend({
            headerTemplate:_.template(HeaderTemplate),
            template:_.template(StudentViewTemplate),
            footerTemplate:_.template(FooterTemplate),

            events : {
                'click #contactUs' : 'handleContactUs'
            },
            render : function () {
                this.$el.append(this.headerTemplate({canMoveBack: true, title: "Student"}));
                this.$el.append(this.template());
                this.$el.append(this.footerTemplate());
                return this;
            },
            handleContactUs : function() {
                $.mobile.jqmNavigator.showDialog(new ContactUsView());
            }

        });
        return StudentView;
    });