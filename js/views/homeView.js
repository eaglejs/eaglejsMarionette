define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/home.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var homeView = Backbone.Marionette.ItemView.extend({
            template : _.template(template),
            onShow: function(){
            	$('.nav-menu').removeClass('selected');
            	$('.nav-menu:eq(0)').addClass('selected');
            }
        });

        return homeView;
    }
);