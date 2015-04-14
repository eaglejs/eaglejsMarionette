define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/portfolioDetails.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
        	tagName: 'section',
        	className: 'portfolio-details container-fluid',
            template : _.template(template)
        });
    }
);