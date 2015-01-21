define([ 'backbone', 'marionette', 'jquery', 'underscore', 'text!../html/footer.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
        	tagName: "p",
            className: "copyright text-center",
            template : _.template(template),
        });
    }
);