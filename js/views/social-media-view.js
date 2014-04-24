define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'Text!../html/social-media' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var socialMediaView = Backbone.Marionette.ItemView.extend({
        	className: "social-media",
            template : _.template(template),
        });
        return socialMediaView;
    }
);