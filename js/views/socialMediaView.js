define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/socialMedia.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var socialMediaView = Backbone.Marionette.ItemView.extend({
        	className: "social-media",
            template : _.template(template),
            onShow: function(){
            	$('.nav-menu').removeClass('selected');
            	$('.nav-menu:eq(2)').addClass('selected');
            }
        });
        return socialMediaView;
    }
);