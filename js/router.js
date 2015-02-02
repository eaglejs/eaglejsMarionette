define([
	'backbone',
	'marionette'
], 
	function(Backbone, Marionette){
		'use strict'

		var MyRouter = Backbone.Marionette.AppRouter.extend({
			appRoutes: {
				'': 'home',
				'portfolio': 'portfolio',
				'social-coding': 'socialCoding',
				'*actions': 'home'
			}
		});
		return MyRouter;
	}
)