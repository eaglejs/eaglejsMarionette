define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/socialCoding.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
        	className: "social-coding",
            template : _.template(template),
            onShow: function() {
                $('#menu').removeClass('fa-arrow-left').addClass('fa-navicon');
            }
        });
    }
);