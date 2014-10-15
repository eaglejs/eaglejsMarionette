define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/layout.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var layout = Backbone.Marionette.LayoutView.extend({
            tagName: "section",
            className: "site-container",
            template: _.template(template),
            regions: {
                headerRegion: "header",
                mainContentRegion: "#main-content",
                portfolioDialog: ".portfolio-dialog",
                footerRegion: "footer"
            }
        });
        return layout;
    });