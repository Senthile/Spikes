define(['jquery','underscore', 'backbone'],function($, _, Backbone) {
    var router;
    var setRouter = function(r) {
        router = r;
    };
    var getRouter = function() {
        return router;
    };
    return {
        setRouter: setRouter,
        getRouter: getRouter
    };
});
