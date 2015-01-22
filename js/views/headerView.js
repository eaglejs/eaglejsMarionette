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
                    $navContainer: $('.nav-container'),
                    $siteSection: $('.site-section')
                }
            	vent.trigger('show:nav:menu', elements);
            }
        });
    }
);