define([ 'Backbone', 'Marionette', 'jQuery', 'Underscore', 'Text!../html/footer.html' ],
    function (Backbone, Marionette, $, _, template) {
        'use strict';
        var footerView = Backbone.Marionette.ItemView.extend({
        	tagName: "p",
            className: "copyright text-center",
            template : _.template(template),
        });
        return footerView;
    }
);