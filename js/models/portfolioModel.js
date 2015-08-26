define(function(require) {
    'use strict';
    var App = require('app');       
    return Backbone.Model.extend({
        defaults: {
            'title': '',
            'img': '',
            'about': '',
            'used': '',
            'alt': '',
            'smallImg': ''
        }
    });
});