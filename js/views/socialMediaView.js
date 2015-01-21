define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/socialMedia.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
        	className: "social-media",
            template : _.template(template)
        });
    }
);