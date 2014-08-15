define([
	'backbone',
	'marionette',
	'LayoutView',
	'HeaderView',
	'HomeView',
	'PortfolioView',
	'ModalDialogsCollection',
	'DialogView',
	'SocialMediaView',
	'FooterView'
], 

	function(Backbone, Marionette, layoutView, headerView, homeView, portfolioView, modalDialogsCollection, dialogView, socialMediaView, footerView){
		'use strict'

		var MyController = Backbone.Marionette.Controller.extend({
			initialize: function(){
				this.layout = new layoutView();
				MyApp.mainRegion.show(this.layout);
				this.layout.headerRegion.show(new headerView());
				this.layout.footerRegion.show(new footerView());
			},
			main: function(){
				this.layout.mainContentRegion.show(new homeView());
			},
			portfolio: function(){
				this.layout.mainContentRegion.show(new portfolioView({
					collection: modalDialogsCollection
				}));
			},
			socialMedia: function(){
				this.layout.mainContentRegion.show(new socialMediaView());
			}
		});
	}
)