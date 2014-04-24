define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'Text!../html/footer' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var footerView = Backbone.Marionette.ItemView.extend({
        	className: "social-media",
            template : template,
        });
        return footerView;
    }
);