define(['jquery', 'underscore', 'backbone','text!modules/header/headerViewTemplate.html'],
function($, _, Backbone, headerViewTemplate){

  var HeaderView = Backbone.View.extend({

    //initialize template
    template:_.template(headerViewTemplate),

    //render the content into div of view
    render: function(context){
	  //this.el is the root element of Backbone.View. By default, it is a div.
      //$el is cached jQuery object for the view's element.
      //append the compiled template into view div container
      this.$el.append(this.template(context));

      //return to enable chained calls
      return this;
    }
  });
  return HeaderView;
});
