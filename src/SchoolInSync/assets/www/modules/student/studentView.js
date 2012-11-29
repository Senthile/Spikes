define(['jquery', 'underscore', 'backbone', 'modules/header/headerView','modules/footer/footerView','text!modules/student/studentViewTemplate.html'],
function($, _, Backbone,HeaderView, FooterView, studentViewTemplate){

  var StudentView = Backbone.View.extend({
    //initialize template
    template:_.template(studentViewTemplate),

    context: {page:'student', header: 'Student', previous: 'login'},

    render: function(){
        this.$el.append(new HeaderView().render(this.context).el);
        this.$el.append(this.template());
        this.$el.append(new FooterView().render(this.context).el);
        return this;
    }

  });
  return StudentView;
});
