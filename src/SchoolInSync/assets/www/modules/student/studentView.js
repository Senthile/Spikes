define(['jquery', 'underscore', 'backbone','modules/header/headerView','modules/footer/footerView','text!modules/student/studentViewTemplate.html'],
function($, _, Backbone, HeaderView, FooterView, studentViewTemplate){

  var StudentView = Backbone.View.extend({
    //initialize template
    template:_.template(studentViewTemplate),

    //render the content into div of view
    render: function(){
	  //this.el is the root element of Backbone.View. By default, it is a div.
      //$el is cached jQuery object for the view's element.
      //append the compiled template into view div container
      this.$el.append(new HeaderView().render({header:'Student', previous: 'login'}).el);
      this.$el.append(this.template());
      this.$el.append(new FooterView().render().el);

      //return to enable chained calls
      return this;
    }
  });
  return StudentView;
});
