<div data-role="header" data-position="fixed">
    <% if(canMoveBack) { %>
    <a id="btnBack" href="javascript:javascript:window.history.go(-1);" data-icon="back" data-iconpos="notext">Back</a>
    <% } %>
    <h1><%=title%></h1>
</div>