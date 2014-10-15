define([ 'backbone', 'marionette', 'vent', 'jquery', 'underscore', 'text!../html/portfolioItem.html' ],
    function (Backbone, Marionette, vent, $, _, template) {
        'use strict';
        return Backbone.Marionette.ItemView.extend({
        	className: 'col-xs-3',
            template : _.template(template),
            events: {
            	'click a': 'showDialogView'
            },
            showDialogView: function(e){
            	e.preventDefault();

            	vent.trigger('show:dialogView', this.model);
            }

        });
    }
);