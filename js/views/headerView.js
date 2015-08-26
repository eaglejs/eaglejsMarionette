define(function (require) {
        'use strict';
        var App = require('app');
        var template = require('text!../../html/header.html');
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
                    App.vent.trigger('portfolio');
                } else {
                    App.vent.trigger('show:nav:menu', elements);
                }
            }
        });
    }
);