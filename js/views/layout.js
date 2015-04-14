define([ 'backbone', 'marionette', 'jquery', 'underscore', 'vent', 'text!../html/layout.html' ],
    function (Backbone, Marionette, $, _, vent, template) {
        'use strict';
        return Backbone.Marionette.LayoutView.extend({
            className: "site-container",
            template: _.template(template),
            events: {
                "click .site-section": "hideNavMenu",
                "click .overlay": "hideNavMenu"
            },
            regions: {
                headerRegion: "header",
                mainContentRegion: "#main-content",
                navMenuRegion: ".nav-container",
                footerRegion: "footer"
            },
            hideNavMenu: function(){
                var elements = {
                    $body: $('body'),
                    $overlay: $('.overlay')
                };
               vent.trigger("hide:nav:menu", elements);
            }
        });
    }
);