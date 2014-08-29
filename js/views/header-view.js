define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/header.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var headerView = Backbone.Marionette.ItemView.extend({
            template : _.template(template),
        });

        return headerView;
    }
);