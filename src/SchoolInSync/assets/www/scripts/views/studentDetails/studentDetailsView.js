// Includes file dependencies
define([ "jquery", "backbone", 'text!views/common/header.tpl', 'text!views/studentDetails/studentDetailsView.tpl', 'text!views/common/footer.tpl', "models/model"],
    function( $, Backbone, HeaderTemplate, StudentDetailsViewTemplate, FooterTemplate, Model) {

        var self = Model;
        // Extends Backbone.View
        var StudentDetailsView = Backbone.View.extend( {
            events : {
                'pageinit': "pageinit",
                'pagecreate': "pagecreate",
                'pageshow': "pageshow"
            },

            headerTemplate: _.template(HeaderTemplate),
            template:_.template(StudentDetailsViewTemplate),
            footerViewTemplate: _.template(FooterTemplate),

            initialize: function() {
                //this.model.on('change',this.handleModelChange,this);
            },

            handleModelChange : function() {
                this.render();
                $("#" + this.$el.attr("id")).page('destroy').page(); //recreate the page
            },

            render: function() {
                var data, title, header, content, footer;
                if(this.model){
                    data = this.model.toJSON();
                    title = data.firstName + " " + data.lastName.substring(0,1);
                }
                header = this.headerTemplate({canMoveBack: true, logout: true, title: title}),
                content = this.template({student:data}),
                footer =   this.footerViewTemplate();
                this.$el.html(header + content + footer);
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