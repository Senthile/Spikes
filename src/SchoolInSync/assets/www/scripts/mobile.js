// Sets the require.js configuration for your application.
require.config( {
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
    paths: {
        // Core Libraries
        "jquery": "libs/jquery-1.9.1",
        "jquerymobile": "libs/jquery.mobile-1.3.0",
        "underscore": "libs/underscore-1.4.3",
        "backbone": "libs/backbone-0.9.2",
        text:'libs/text-2.0.3'
    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        "backbone": {
            "deps": [ "underscore", "jquery" ],
            "exports": "Backbone" //attaches "Backbone" to the window object
        }
    } // end Shim Configuration

} );

// Includes File Dependencies
require([ "jquery", "backbone", "routers/mobileRouter" ], function ($, Backbone, MobileRouter) {
    $(document).on("mobileinit",
        // Set up the "mobileinit" handler before requiring jQuery Mobile's module
        function () {
            // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
            $.mobile.linkBindingEnabled = false;
            // Disabling this will prevent jQuery Mobile from handling hash changes
            $.mobile.hashListeningEnabled = false;
            // Setting default transition to slide
            $.mobile.defaultPageTransition = 'slide';

            if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
                //cordova.exec(null, null, 'SplashScreen', 'hide', []);
            }
        }
    )
    require([ "jquerymobile" ], function () {
        // Instantiates a new Backbone.js Mobile Router
        this.MobileRouter = new MobileRouter();
    });
    $( "#contactus" ).on( "click", "a", function( e ) {
        e.preventDefault();
        window.history.go(-1);
    });
});

