define(['jquery', 'underscore', 'backbone','global','text!modules/footer/footerViewTemplate.html'],
function($, _, Backbone, Global, footerViewTemplate){

  var FooterView = Backbone.View.extend({
     events : {
          'click .clickableContactUs' : 'handleClick'
      },

    //initialize template
    template:_.template(footerViewTemplate),

    context : null,

    //render the content into div of view
    render: function(context){
      this.context = context;
      this.$el.append(this.template());
      return this;
    },
    handleClick : function() {
       Global.getRouter().navigate(this.context.page +"/contactus", {trigger:true});
    }
  });
  return FooterView;
});
