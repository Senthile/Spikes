// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery:     'libs/jquery/jquery',
    jqm:        'libs/jquerymobile/jquery.mobile',
    underscore: 'libs/underscore/underscore',
    backbone:   'libs/backbone/backbone',
    text:       'libs/require/text',
    model:      'model/projectModel'
  }

});

require([
  // Load our app module and pass it to our definition function
  'app', 'jqm-config'

], function(App){
    $(document).ready(function() {
      console.log('DOM IS READY');// Handler for .ready() called.
    });
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
