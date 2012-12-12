define(['jquery', 'underscore', 'Backbone',
        'text!views/header/header.tpl', 'text!views/login/loginView.tpl', 'text!views/footer/footer.tpl',
        'views/contactUs/ContactUsView', 'views/student/studentView', ],
    function ($, _, Backbone, HeaderTemplate, LoginViewTemplate, FooterTemplate, ContactUsView, StudentView) {
        var LoginView = Backbone.View.extend({
            headerTemplate:_.template(HeaderTemplate),
            template:_.template(LoginViewTemplate),
            footerTemplate:_.template(FooterTemplate),

            events : {
                'click #login' : 'handleLogin',
                'click #contactUs' : 'handleContactUs'
            },
            render : function () {
                this.$el.append(this.headerTemplate({canMoveBack: false, title: "Login"}));
                this.$el.append(this.template());
                this.$el.append(this.footerTemplate());
                return this;
            },
            handleLogin : function (event) {
                $.mobile.jqmNavigator.pushView(new StudentView());
            },
            handleContactUs : function() {
                $.mobile.jqmNavigator.showDialog(new ContactUsView());
            }

        });
        return LoginView;
    });