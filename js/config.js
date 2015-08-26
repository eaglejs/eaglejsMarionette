require.config({
    paths: {
        // Libraries
        backbone: "libs/backbone",
        bootstrap: "libs/bootstrap",
        jquery: "libs/jquery",
        marionette: "libs/marionette",
        underscore: "libs/underscore",

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