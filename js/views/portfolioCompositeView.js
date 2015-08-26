define(
	function(require){
		'use strict';
		var App = require('app');
		var portfolioView = require('views/portfolioView');
		var portfolioCollection = require('collections/portfolioCollection');
		var template = require('text!../../html/portfolioLayout.html');
		
		return Backbone.Marionette.CompositeView.extend({
			template: _.template(template),
			className: 'portfolio',
			childViewContainer: '.row',
			childView: portfolioView,
			initialize: function(){
				this.collection = new portfolioCollection();
			}
		});
	}
);