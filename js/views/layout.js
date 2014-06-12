define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'Text!../html/layout.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var layout = Backbone.Marionette.Layout.extend({
            tagName: "section",
            className: "site-container",
            template: _.template(template),
            regions: {
                headerRegion: "header",
                mainContentRegion: "#main-content",
                footerRegion: "footer"
            }
        });
        return layout;
    });