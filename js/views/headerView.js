define([ 'backbone', 'marionette', 'jquery', 'underscore', 'vent', 'text!../html/header.html' ],
    function (Backbone, Marionette, $, _, vent, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
            template : _.template(template),
            events: {
            	'click #menu': 'showNavMenu'
            },
            showNavMenu: function(){
                var elements = {
                    $body: $('body'),
                    $navContainer: $('.nav-container'),
                    $overlay: $('.overlay')
                }
                if ($('#menu.fa-arrow-left').length) {
                    $('#menu').removeClass('fa-arrow-left').addClass('fa-navicon');
                    vent.trigger('portfolio');
                } else {
                    vent.trigger('show:nav:menu', elements);
                }
            }
        });
    }
);