define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/socialMedia.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var socialMediaView = Backbone.Marionette.ItemView.extend({
        	className: "social-media",
            template : _.template(template),
        });
        return socialMediaView;
    }
);