require.config({
    paths: {
        // Libraries
        Backbone: "libs/backbone",
        Bootstrap: "libs/bootstrap",
        jQuery: "libs/jquery",
        Marionette: "libs/marionette",
        Underscore: "libs/underscore",

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
        jQuery:{
            exports: '$'
        },
        Underscore: {
            exports: '_'
        },
        Bootstrap: {
            deps: ['jQuery']
        },
        Backbone: {
            deps: ['jQuery', 'Underscore', 'Bootstrap'],
            exports: 'Backbone'
        },
        Marionette: {
            deps: ['jQuery', 'Underscore', 'Backbone'],
            exports: "Marionette"
        }
    }
});
// this calls the app.js
require(['app'], function(SurakusaApp){
    SurakusaApp.start();
});