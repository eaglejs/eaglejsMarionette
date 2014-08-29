define([
	'backbone',
	'marionette'
], 

	function(Backbone, Marionette){
		'use strict'

		var MyRouter = Backbone.Marionette.AppRouter.extend({
			appRoutes: {
				'': 'home',
				'home': 'home',
				'portfolio': 'portfolio',
				'social-media': 'socialMedia'
			}
		});
		return MyRouter;
	}
)