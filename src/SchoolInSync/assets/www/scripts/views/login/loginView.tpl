<div data-role="content">
        <header>
            <center><img id="logo" src="images/logo.jpg" alt="logo"/></center>
        </header>
        <section>
            <ul>
                <li>
                    <label>Parent/Guardian Id:</label>
                    <input id="userId" type="text" value="<%= userId %>"/>
                </li>
                <li>
                    <label>Password:</label>
                   <input id="password" type="password" value="<%= password %>"/>
                </li>
                <li>
                    <a data-role="button" id="btnLogin" data-inline="true">Login</a>
                </li>
                <li>
                    <span id="error" class="error"> <%if(result==='false'){%><%=error%><%}%> </span>
                </li>
            </ul>
        </section>
</div>
