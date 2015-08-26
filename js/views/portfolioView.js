define(function (require) {
        'use strict';
        var App = require('app');
        var template = require('text!../../html/portfolioItem.html');
        return Backbone.Marionette.ItemView.extend({
        	className: 'col-xs-3',
            template : _.template(template),
            events: {
            	'click .portfolio-item': 'showPortfolioItem'
            },
            showPortfolioItem: function(){
                this.onBeforeDestroy = "";
            	App.vent.trigger('show:portfolioDetails', this.model);
            }

        });
    }
);