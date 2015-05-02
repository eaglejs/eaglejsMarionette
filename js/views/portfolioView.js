define([ 'backbone', 'marionette', 'vent', 'jquery', 'underscore', 'text!../html/portfolioItem.html' ],
    function (Backbone, Marionette, vent, $, _, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
        	className: 'col-xs-3',
            template : _.template(template),
            events: {
            	'click button': 'showPortfolioItem'
            },
            onShow: function() {
                $('#menu').removeClass('fa-arrow-left').addClass('fa-navicon');
            },
            showPortfolioItem: function(){
                $('#menu').removeClass('fa-navicon').addClass('fa-arrow-left');
            	vent.trigger('show:portfolioDetails', this.model);
            }

        });
    }
);