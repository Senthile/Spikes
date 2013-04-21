// Includes file dependencies
define([ "jquery", "backbone", 'views/common/header/headerView', 'text!views/studentDetails/studentDetailsView.tpl',  'views/common/footer/footerView', "models/model"],
    function( $, Backbone, HeaderView, StudentDetailsViewTemplate, FooterView, Model) {

        var self = Model;
        // Extends Backbone.View
        var StudentDetailsView = Backbone.View.extend( {
            events : {
                'pageinit': "pageinit",
                'pagecreate': "pagecreate",
                'pageshow': "pageshow"
            },

            template:_.template(StudentDetailsViewTemplate),

            initialize: function() {
                //this.model.on('change',this.handleModelChange,this);
                this.headerView =  new HeaderView({model:{canMoveBack: false, logout: true, title: "Students"}});
                this.footerView = new FooterView();
            },

            handleModelChange : function() {
                this.render();
                $("#" + this.$el.attr("id")).page('destroy').page(); //recreate the page
            },

            render: function() {
                var data, title;
                if(this.model) {
                    var data = this.model.toJSON(),
                    title = data.firstName + " " + data.lastName.substring(0,1);
                }
                this.$el.html(this.template({student:data}));
                this.headerView =  new HeaderView({model:{canMoveBack: true, logout: true, title: title}});
                this.headerView.setElement(this.$("div[data-role='header']")).delegateEvents();
                this.footerView.setElement(this.$("div[data-role='footer']")).delegateEvents();

                this.headerView.render();
                this.footerView.render();
                return this;
            },

            pagecreate : function() {
                //this.render();
                console.log("studentdetailspage: pagecreate");
            },

            pageinit : function() {
                console.log("studentdetailspage: pageinit");
            },

            pageshow: function() {
               var studentId = MobileRouter.getUrlParam("id"),
                   student =  Model.students.get(studentId);
               console.log("studentdetailspage: pageshow with id " + studentId);
               if(student) {
                   this.model = student;
                   this.model.on('change',this.handleModelChange,this);
                   this.model.trigger("change");
               } else {
                   this.handleModelChange();
               }
            }
        });

        // Returns the View class
        return StudentDetailsView;
    } );