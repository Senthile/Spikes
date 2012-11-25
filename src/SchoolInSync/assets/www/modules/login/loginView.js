define(['jquery', 'underscore', 'backbone','modules/header/headerView','modules/footer/footerView','text!modules/login/loginViewTemplate.html'],
function($, _, Backbone, HeaderView, FooterView, loginViewTemplate){

  var LoginView = Backbone.View.extend({
    events : {
        'click .clickableLogin' : 'handleClick'
    },
    //initialize template
    template:_.template(loginViewTemplate),

    //render the content into div of view
    render: function(){
        //this.el is the root element of Backbone.View. By default, it is a div.
        //$el is cached jQuery object for the view's element.
        //append the compiled template into view div container
        this.$el.append(new HeaderView().render({header:'Login',previous: null}).el);
        this.$el.append(this.template());
        this.$el.append(new FooterView().render().el);

        //return to enable chained calls
        return this;
    } ,

    handleClick : function() {
        this.options.router.navigate("student", {trigger:true});
    }
  });
  return LoginView;
});
