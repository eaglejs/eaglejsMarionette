define(function (require) {
        'use strict';
        var App = require('app');
        var template = require('text!../../html/home.html');
        return Backbone.Marionette.ItemView.extend({
            template : _.template(template),
            className: 'home'
        });
    }
);