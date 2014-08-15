define([
	'backbone',
	'marionette',
	'MyController'
], 

	function(Backbone, Marionette, MyController){
		'use strict'

		var MyApp = new Backbone.Marionette.Application();

		MyApp.addRegions({
			mainRegion: "body"
		});

		MyRouter = new Backbone.Marionette.AppRouter.extend({
			controller: new MyController(),
			appRoutes: {
				'': 'main',
				'home': 'main',
				'portfolio': 'portfolio',
				'social-media': 'socialMedia'
			}
		});

		MyApp.start();
	}
)