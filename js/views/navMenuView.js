define(['backbone', 'marionette', 'jquery', 'underscore', 'text!../html/navMenu.html'], 
	function(Backbone, Marionette, $, _, template){
		'use strict';
		return Backbone.Marionette.ItemView.extend({
			tagName: 'ul',
			template: _.template(template)
		});
	}
);