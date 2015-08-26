define(function (require) {
    'use strict';
    var App = require('app');
    var template = require('text!../../html/layout.html');
    
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
            App.vent.trigger("hide:nav:menu", elements);
        }
    });
});