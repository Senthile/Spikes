define(['jquery', 'underscore', 'backbone','text!modules/footer/footerViewTemplate.html'],
function($, _, Backbone, footerViewTemplate){

  var FooterView = Backbone.View.extend({
     events : {
          'click .clickableContactUs' : 'handleClick'
      },

    //initialize template
    template:_.template(footerViewTemplate),

    //render the content into div of view
    render: function(){
	  //this.el is the root element of Backbone.View. By default, it is a div.
      //$el is cached jQuery object for the view's element.
      //append the compiled template into view div container
      this.$el.append(this.template());

      //return to enable chained calls
      return this;
    },
    handleClick : function() {
        console.log("contact us clicked");
    }
  });
  return FooterView;
});
