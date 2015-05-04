define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/home.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
            template : _.template(template),
            className: 'home'
        });
    }
);