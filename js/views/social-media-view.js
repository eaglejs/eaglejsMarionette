define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'Text!../html/social-media' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var socialMediaView = Backbone.Marionette.ItemView.extend({
            template : template,
        });
        return socialMediaView;
    }
);