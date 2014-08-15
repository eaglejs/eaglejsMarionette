require.config({
    paths: {
        // Libraries
        backbone: "libs/backbone",
        bootstrap: "libs/bootstrap",
        jquery: "libs/jquery",
        marionette: "libs/marionette",
        underscore: "libs/underscore",

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
        MyController: "controller",

        // This will let me include html templates
        'text': "text"
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
            exports: 'backbone'
        },
        Marionette: {
            deps: ['backbone'],
            exports: "Marionette"
        }
    }
});
// this calls the router.js
require(['router']);