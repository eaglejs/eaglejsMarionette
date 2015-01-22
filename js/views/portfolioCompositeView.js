define(
	['backbone', 'marionette', 'PortfolioView', 'text!../html/portfolioLayout.html'],
	function(Backbone, Marionette, portfolioView, template){
		'use strict';
		return Backbone.Marionette.CompositeView.extend({
			template: _.template(template),
			className: 'portfolio',
			childViewContainer: '.row',
			childView: portfolioView,
			initialize: function(){
				portfolioView.collection = this.collection;
			}
		});
	}
);