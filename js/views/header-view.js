define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'Text!../html/header' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var headerView = Backbone.Marionette.ItemView.extend({
            template : template,
        });

        return headerView;
    }
);