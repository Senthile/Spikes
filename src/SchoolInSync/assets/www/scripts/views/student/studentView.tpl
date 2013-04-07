<div data-role="content">
    <% if(students.length) { %>
        <ul data-role="listview" data-inset="true">
            <% _.each(students, function(student) {%>
                <li><a href="#list" data-identity='<%=this.escape(student.studentId)%>'><%=this.escape(student.firstName) + " " + this.escape(student.lastName)%> <p class="ui-li-aside"><strong><%=student.std%></strong></p></a></li>
            <%})%>
        </ul>
    <% } else { %>
        <span class="error"> No data available to display.</span>
    <% } %>
</div>
