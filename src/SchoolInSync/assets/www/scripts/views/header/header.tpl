<div data-role="header" data-position="fixed">
    <% if(canMoveBack) { %>
    <a id="btnBack" href="javascript:$.mobile.jqmNavigator.popView();" data-icon="back" data-iconpos="notext">Back</a>
    <% } %>
    <h1><%=title%></h1>
</div>