define([
	'backbone',
	'marionette',
	'vent'
], 

	function(Backbone, Marionette, vent){
		'use strict'

		var MyController = Backbone.Marionette.Controller.extend({
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

		return MyController;
	}
)