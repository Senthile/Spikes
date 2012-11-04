$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!

    $.support.cors = true;  //Cross-Origin Resource Sharing
    $.mobile.allowCrossDomainPages = true;
});