define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/portfolioItem.html' ],
    function (Backbone, Marionette, $, _,template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
        	className: 'col-xs-3',
            template : _.template(template),
            onShow: function(){
            	$('.nav-menu').removeClass('selected');
            	$('.nav-menu:eq(1)').addClass('selected');
            }
        });
    }
);