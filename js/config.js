require.config({
    paths: {
        // Libraries
        backbone: "libs/backbone/backbone-min",
        bootstrap: "libs/bootstrap/bootstrap.min",
        jquery: "libs/jquery/jquery.min",
        marionette: "libs/backbone.marionette/backbone.marionette.min",
        underscore: "libs/underscore/underscore-min",

        // This will let me include html templates
        text: "text"
    },
    waitSeconds: 30,
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});
require(['app', 'router'], function (App, Router) {
  App.addInitializer(function () {
    this.router = new Router();
    Backbone.history.start({pushState: true});
  });
  App.start();
});