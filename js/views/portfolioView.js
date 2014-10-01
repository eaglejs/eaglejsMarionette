define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/portfolioLayout.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
        	className: 'col-xs-3',
            template : _.template(template)
        });
    }
);