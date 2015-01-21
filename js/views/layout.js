define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/layout.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        return Backbone.Marionette.LayoutView.extend({
            className: "site-container",
            template: _.template(template),
            regions: {
                headerRegion: "header",
                mainContentRegion: "#main-content",
                navMenuRegion: ".nav-container",
                portfolioDialog: ".portfolio-dialog",
                footerRegion: "footer"
            }
        });
    }
);