define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'Text!../html/home.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var homeView = Backbone.Marionette.ItemView.extend({
            template : _.template(template)
        });

        return homeView;
    }
);