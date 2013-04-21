<div data-role='header' data-position='fixed'></div>
<div data-role="content">
    <% if(student) { %>
        <ul data-role="listview" data-inset="true">
            <li>
                <a href="#list" data-identity=''>Tests/Exams</a>
            </li>
            <li>
                <a href="#list" data-identity=''>Leaves</a>
            </li>
            <li>
                <a href="#list" data-identity=''>Awards</a>
            </li>
            <li>
                <a href="#list" data-identity=''>Sports/Activities</a>
            </li>
            <li>
                <a href="#list" data-identity=''>Feedback</a>
            </li>
            <li>
                <a href="#list" data-identity=''>Post a Question</a>
            </li>
        </ul>
    <% } else { %>
        <span class="error"> No data available to display.</span>
    <% } %>
</div>
<div data-role="footer" data-position="fixed"></div>