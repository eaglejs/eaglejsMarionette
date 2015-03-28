define([
	'backbone',
	'marionette',
	'LayoutView',
	'HeaderView',
	'FooterView',
	'HomeView',
	'PortfolioCompositeView',
	'SocialCodingView',
	'PortfolioCollection',
	'NavMenuView',
	'vent'
], 

	function(Backbone, Marionette, layoutView, headerView, footerView,
			 homeView, portfolioCompositeView, socialCodingView, portfolioCollection, navMenuView, vent){
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
			app.layout.mainContentRegion.show(new portfolioCompositeView({ collection: new portfolioCollection()}));
		});

		vent.on('socialCoding', function(){
			app.layout.mainContentRegion.show(new socialCodingView());
		});

		vent.on('show:nav:menu', function(elements){
			if (elements.$navContainer.html().length){
				elements.$body.removeClass('nav-open');
				app.layout.navMenuRegion.empty();
			} else{
				app.layout.navMenuRegion.show(new navMenuView());
				elements.$body.addClass('nav-open');
			}
		});

		vent.on('hide:nav:menu', function(elements){
			elements.$body.removeClass('nav-open');
			app.layout.navMenuRegion.empty();
		});

		vent.on('show:portfolioItem', function(model){
			app.layout.mainContentRegion.show(new portfolioItem({model: model}));
		});

		return app;
	}
);