define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/portfolioDetails.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
        	tagName: 'section',
        	className: 'portfolio-details container-fluid',
            template : _.template(template),
            onShow: function () {
            	this.showMenu(true);
                $('#menu').focus();
            },
            onDestroy: function () {
            	this.showMenu(false);
            },
            showMenu: function (menu) {
            	if (!menu) {
        			$('#menu').removeClass('fa-arrow-left').addClass('fa-navicon');
            	} else {
            		$('#menu').removeClass('fa-navicon').addClass('fa-arrow-left');
            	}
                
            }
        });
    }
);