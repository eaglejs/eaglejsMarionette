define(['Backbone',
		'Marionette',
		'Controller'
	], 
	function(Backbone, Marionette, Controller){
		'use strict'

		var MyRouter = new Marionette.AppRouter({
			controller: new Controller(),
			routes: {
				'': 'main',
				'home': 'main',
				'portfolio': 'portfolio',
				'social-media': 'socialMedia'
			}
		});

		return MyRouter;

	}
);
