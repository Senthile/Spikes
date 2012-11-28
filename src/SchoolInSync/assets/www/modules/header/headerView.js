define(['jquery', 'underscore', 'backbone','text!modules/header/headerViewTemplate.html'],
function($, _, Backbone, headerViewTemplate){

  var HeaderView = Backbone.View.extend({

    //initialize template
    template:_.template(headerViewTemplate),

    context: null,

    //render the content into div of view
    render: function(context){
      this.context = context;
      this.$el.append(this.template(context));
      return this;
    }
  });
  return HeaderView;
});
