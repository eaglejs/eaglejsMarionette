define([ 'backbone', 'marionette', 'vent', 'jquery', 'underscore', 'text!../html/portfolioItem.html' ],
    function (Backbone, Marionette, vent, $, _, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
        	className: 'col-xs-3',
            template : _.template(template),
            events: {
            	'click .portfolio-item': 'showPortfolioItem'
            },
            showPortfolioItem: function(){
                this.onBeforeDestroy = "";
            	vent.trigger('show:portfolioDetails', this.model);
            }

        });
    }
);