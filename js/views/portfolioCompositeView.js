define(
	['backbone', 'marionette', 'text!../html/portfolioLayout.html'],
	function(Backbone, Marionette){
		'use strict';
		return Backbone.Marionette.CompositeView.extend({
			template: _.template(template)
		});
	}
);