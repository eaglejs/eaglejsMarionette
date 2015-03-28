define([
    'backbone'
],
    function(Backbone) {
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
    }
);