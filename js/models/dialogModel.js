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
            },

            parse: function(response){

                response.id = this.assignUniqueID();

                return response;

            },

            assignUniqueID: function() {
                return Math.random();
            }

        });

        return modalDialog;
    }
);