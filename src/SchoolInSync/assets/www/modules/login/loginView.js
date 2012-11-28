define(['jquery', 'underscore', 'backbone','modules/header/headerView','modules/footer/footerView','text!modules/login/loginViewTemplate.html'],
function($, _, Backbone, HeaderView, FooterView, loginViewTemplate){

  var LoginView = Backbone.View.extend({
    events : {
        'click .clickableLogin' : 'handleClick'
    },
    //initialize template
    template:_.template(loginViewTemplate),

    context: {page:'login', header: 'Login', previous: null},

    //render the content into div of view
    render: function(){

        this.$el.append(new HeaderView({router: this.options.router}).render(this.context).el);
        this.$el.append(this.template());
        this.$el.append(new FooterView({router: this.options.router}).render(this.context).el);

        //return to enable chained calls
        return this;
    } ,

    handleClick : function() {
        this.options.router.navigate("student", {trigger:true});
    }
  });
  return LoginView;
});
