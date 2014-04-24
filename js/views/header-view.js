define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'Text!../html/header' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var headerView = Backbone.Marionette.ItemView.extend({
            template : _.template(template),
        });

        return headerView;
    }
);