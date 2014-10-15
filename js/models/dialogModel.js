define([
    'backbone'
],
    function(Backbone) {
        var modalDialog = Backbone.Model.extend({
            defaults: {
                'title': '',
                'img': '',
                'about': '',
                'used': '',
                'alt': '',
                'smallImg': ''
            }
        });

        return modalDialog;
    }
);