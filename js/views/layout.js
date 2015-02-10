define([ 'backbone', 'marionette', 'jquery', 'underscore', 'vent', 'text!../html/layout.html' ],
    function (Backbone, Marionette, $, _, vent, template) {
        'use strict';
        return Backbone.Marionette.LayoutView.extend({
            className: "site-container",
            template: _.template(template),
            events: {
                "click .site-section": "hideNavMenu"
            },
            regions: {
                headerRegion: "header",
                mainContentRegion: "#main-content",
                navMenuRegion: ".nav-container",
                portfolioDialog: ".portfolio-dialog",
                footerRegion: "footer"
            },
            hideNavMenu: function(){
                var elements = {
                    $body: $('body')
                };
               vent.trigger("hide:nav:menu", elements);
            }
        });
    }
);