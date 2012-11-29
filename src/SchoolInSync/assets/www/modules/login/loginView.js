define(['jquery', 'underscore', 'backbone','global','modules/header/headerView','modules/footer/footerView','text!modules/login/loginViewTemplate.html'],
function($, _, Backbone, Global, HeaderView, FooterView, loginViewTemplate){

  var LoginView = Backbone.View.extend({
    events : {
        'click .clickableLogin' : 'handleClick'
    },
    //initialize template
    template:_.template(loginViewTemplate),

    context: {page:'login', header: 'Login', previous: null},

    render: function(){
        this.$el.append(new HeaderView().render(this.context).el);
        this.$el.append(this.template());
        this.$el.append(new FooterView().render(this.context).el);
        //return to enable chained calls
        return this;
    } ,

    handleClick : function() {
        Global.getRouter().navigate("student", {trigger:true});
    }
  });
  return LoginView;
});
