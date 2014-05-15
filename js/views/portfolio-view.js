define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'Text!../html/portfolio.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var portfolioView = Backbone.Marionette.ItemView.extend({
            template : _.template(template),
        });
        return portfolioView;
    }
);