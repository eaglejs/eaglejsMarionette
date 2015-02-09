define([ 'backbone', 'marionette', 'jquery', 'underscore', 'vent', 'text!../html/header.html' ],
    function (Backbone, Marionette, $, _, vent, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
            template : _.template(template),
            events: {
            	'click #menu': 'showNavMenu',
                'click .site-container:not(#menu)': 'showNavMenu'
            },
            showNavMenu: function(){
                var elements = {
                    $body: $('body'),
                    $navContainer: $('.nav-container')
                }
            	vent.trigger('show:nav:menu', elements);
            }
        });
    }
);