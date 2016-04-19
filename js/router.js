define(function(require){
		'use strict';
		var App = require('app');
		var BaseController = require('controllers/baseController');
		return Backbone.Marionette.AppRouter.extend({
			controller: new BaseController(),
			appRoutes: {
				'': 'home',
				'portfolio': 'portfolio',
				'social-coding': 'socialCoding',
				'achievements': 'achievements',
				'*actions': 'home'
			}
		});
	}
)