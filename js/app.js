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
	'PortfolioDetailsView',
	'NavMenuView',
	'vent'
], 

	function(Backbone, Marionette, layoutView, headerView, footerView,
			 homeView, portfolioCompositeView, socialCodingView, portfolioCollection, portfolioDetailsView, navMenuView, vent){
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
				elements.$overlay.addClass('hide');
				app.layout.navMenuRegion.empty();
			} else{
				elements.$navContainer.height($(document).height() - 50);
				app.layout.navMenuRegion.show(new navMenuView());
				elements.$body.addClass('nav-open');
				elements.$overlay.removeClass('hide');
			}
		});

		vent.on('hide:nav:menu', function(elements){
			elements.$body.removeClass('nav-open');
			elements.$overlay.addClass('hide');
			app.layout.navMenuRegion.empty();
		});

		vent.on('show:portfolioDetails', function(model){
			app.layout.mainContentRegion.show(new portfolioDetailsView({model: model}));
		});

		return app;
	}
);