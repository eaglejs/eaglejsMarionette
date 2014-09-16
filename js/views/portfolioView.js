define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/portfolioLayout.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var portfolioView = Backbone.Marionette.ItemView.extend({
            template : _.template(template),
        });
        return portfolioView;
    }
);