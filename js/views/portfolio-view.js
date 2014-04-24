define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'Text!../html/portfolio' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var portfolioView = Backbone.Marionette.ItemView.extend({
            template : template,
        });
        return portfolioView;
    }
);