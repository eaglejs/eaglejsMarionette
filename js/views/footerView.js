define(function (require) {
        'use strict';
        var App = require('app');
        var template = require('text!../../html/footer.html');
        return Backbone.Marionette.ItemView.extend({
        	tagName: "p",
            className: "copyright text-center",
            template : _.template(template),
        });
    }
);