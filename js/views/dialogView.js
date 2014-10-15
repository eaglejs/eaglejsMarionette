define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/dialog.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
        	className: 'modal fade',
            template : _.template(template),
            onShow: function(){
            	$('.modal').modal();
            }
        });
    }
);