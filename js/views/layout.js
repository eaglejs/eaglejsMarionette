define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'Text!../html/layout' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var layout = Backbone.Marionette.Layout.extend({
            tagName: "section",
            className: "site-container",
            template: '#layout',
            regions: {
                headerRegion: "header",
                mainContentRegion: "#main-content",
                footerRegion: "footer"
            }
        });
        return layout;
    });