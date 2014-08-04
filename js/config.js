require.config({

    // Paths assumes the js suffix
    paths: {

        // Libraries
        Backbone: "libs/backbone1.1",
        Bootstrap: "libs/bootstrap",
        jQuery: "libs/jquery-1.10.2.min",
        Marionette: "libs/marionette1.8.2",
        Underscore: "libs/underscore-min1.5.2",

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
        Controller: "controller",

        // This will let me include html templates
        'Text': "text"
    },
    waitSeconds: 30,
    shim: {
        'Backbone': {
            deps: ['Underscore', 'jQuery', 'Bootstrap'],
            exports: 'Backbone'
        },
        'Bootstrap': {
            deps: ['jQuery']
        },
        'jQuery':{
            exports: '$'
        },
        'Marionette': {
            deps: ['Backbone', 'jQuery', 'Underscore'],
            exports: "Marionette"
        },
        'Underscore': {
            exports: '_'
        }
    }
});
// this calls the router.js
require(['router']);