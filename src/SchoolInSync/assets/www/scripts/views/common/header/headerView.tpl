<% if(canMoveBack) { %>
    <a id="btnBack" href="javascript:javascript:window.history.go(-1);" data-icon="back" data-iconpos="notext">Back</a>
<% } else { %>
    <a style="display:none" data-icon="back" data-iconpos="notext">Back</a>
<% } %>

<h1><%=title%></h1>

<% if(logout) { %>
    <a data-role="button" id="logout" data-icon="delete" data-iconpos="notext" style="float:right">Logout</a>
<% } %>
