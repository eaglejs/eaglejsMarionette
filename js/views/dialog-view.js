define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'text!../html/dialog.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var dialogView = Backbone.Marionette.ItemView.extend({
            template : _.template(template),
        });
        return dialogView;
    }
);