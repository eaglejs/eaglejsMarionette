define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'text!../html/social-media.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var socialMediaView = Backbone.Marionette.ItemView.extend({
        	className: "social-media",
            template : _.template(template),
        });
        return socialMediaView;
    }
);