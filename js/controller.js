define([
	'backbone',
	'marionette',
	'vent'
], 

	function(Backbone, Marionette, vent){
		'use strict';

		return Backbone.Marionette.Controller.extend({
			home: function(){
				vent.trigger('home');
			},
			portfolio: function(){
				vent.trigger('portfolio');
			},
			socialCoding: function(){
				vent.trigger('social-coding');
			}
		});
	}
)