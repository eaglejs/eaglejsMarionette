define(function(require) {
    'use strict';   
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