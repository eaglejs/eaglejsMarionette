define(
	['backbone', 'marionette', 'PortfolioView', 'ModalDialogsCollection', 'text!../html/portfolioLayout.html'],
	function(Backbone, Marionette, portfolioView, modalDialogsCollection, template){
		'use strict';
		return Backbone.Marionette.CompositeView.extend({
			template: _.template(template),
			childView: new portfolioView({
				collection: new modalDialogsCollection
			}),
			onShow: function(){
				debugger;
			}
		});
	}
);