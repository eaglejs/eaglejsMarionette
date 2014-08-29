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
        DialogModel: "models/dialog-model",

        // Collections
        ModalDialogsCollection: "collections/modal-dialogs-collection",

        // Views
        DialogView: "views/dialog-view",
        FooterView: "views/footer-view",
        HeaderView: "views/header-view",
        HomeView: "views/home-view",
        LayoutView: "views/layout",
        PortfolioView: "views/portfolio-view",
        SocialMediaView: "views/social-media-view",

        // Controllers
        controller: "controller",

        // router
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
            exports: 'Marionette'
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