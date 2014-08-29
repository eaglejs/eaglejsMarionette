define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/home.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var homeView = Backbone.Marionette.ItemView.extend({
            template : _.template(template)
        });

        return homeView;
    }
);