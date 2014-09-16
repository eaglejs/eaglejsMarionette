define([
	'backbone',
	'marionette',
	'LayoutView',
	'HeaderView',
	'FooterView',
	'HomeView',
	'PortfolioView',
	'ModalDialogsCollection',
	'SocialMediaView',
	'vent'
], 

	function(Backbone, Marionette, layoutView, headerView, footerView, homeView, portfolioView, modalDialogsCollection, socialMediaView, vent){
		'use strict'

		var app = new Backbone.Marionette.Application();

		app.addRegions({
			mainRegion: "body"
		});

		app.addInitializer(function(){
			app.layout = new layoutView();
			app.mainRegion.show(app.layout);
			app.layout.headerRegion.show(new headerView());
			app.layout.footerRegion.show(new footerView());
		});

		vent.on('home', function(){
			app.layout.mainContentRegion.show(new homeView());
		});

		vent.on('portfolio', function(){
			app.layout.mainContentRegion.show(new portfolioView());
		});

		vent.on('socialMedia', function(){
			app.layout.mainContentRegion.show(new socialMediaView());
		});

		return app;
	}
);