define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'Text!../html/home' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var homeView = Backbone.Marionette.ItemView.extend({
            template : template
        });

        return homeView;
    }
);