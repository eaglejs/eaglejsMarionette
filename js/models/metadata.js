define (function (require) {
    'use strict';
    
    return Backbone.Model.extend({
        defaults: {
            title: '',
            url: '',
            description: ''
        }    
    });
});