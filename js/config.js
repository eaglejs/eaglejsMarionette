require.config({
    paths: {
        app: "app",

        // Libraries
        backbone: "libs/backbone",
        bootstrap: "libs/bootstrap",
        jquery: "libs/jquery",
        marionette: "libs/marionette",
        underscore: "libs/underscore",
        vent: "libs/vent",

        // Models
        DialogModel: "models/dialogModel",

        // Collections
        ModalDialogsCollection: "collections/modalDialogsCollection",

        // Views
        DialogView: "views/dialogView",
        FooterView: "views/footerView",
        HeaderView: "views/headerView",
        HomeView: "views/homeView",
        LayoutView: "views/layout",
        PortfolioView: "views/portfolioView",
        SocialMediaView: "views/socialMediaView",

        controller: "controller",

        router: "router",

        // This will let me include html templates
        text: "text"
    },
    waitSeconds: 30,
    shim: {
        jquery:{
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['jquery']
        },
        backbone: {
            deps: ['jquery', 'underscore', 'bootstrap'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'marionette'
        }
    }
});
define(['app', 'controller', 'router'], function(app, controller, router){
    new router({
        controller: new controller()
    });
    app.start();
    Backbone.history.start();
});