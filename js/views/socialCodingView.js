define(function (require) {
        'use strict';
        
        var template = require('text!../../html/socialCoding.html');
        return Backbone.Marionette.ItemView.extend({
        	className: "social-coding",
            template : _.template(template)
        });
    }
);