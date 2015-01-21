define([
	'backbone',
	'marionette',
	'vent'
], 

	function(Backbone, Marionette, vent){
		'use strict'

		return Backbone.Marionette.Controller.extend({
			home: function(){
				vent.trigger('home');
			},
			portfolio: function(){
				vent.trigger('portfolio');
			},
			socialMedia: function(){
				vent.trigger('socialMedia');
			}
		});
	}
)