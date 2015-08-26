define(function (require) {
        'use strict';
        var App = require('app');
        var template = require('text!../../html/socialCoding.html');
        return Backbone.Marionette.ItemView.extend({
        	className: "social-coding",
            template : _.template(template)
        });
    }
);