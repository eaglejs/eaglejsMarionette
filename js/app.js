define([
	'backbone',
	'marionette',
	'LayoutView',
	'HeaderView',
	'FooterView',
	'HomeView',
	'PortfolioCompositeView',
	'SocialMediaView',
	'ModalDialogsCollection',
	'DialogModel',
	'DialogView',
	'NavMenuView',
	'vent'
], 

	function(Backbone, Marionette, layoutView, headerView, footerView,
			 homeView, portfolioCompositeView, socialMediaView, modalDialogsCollection, dialogModal, dialogView, navMenuView, vent){
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
			app.layout.mainContentRegion.show(new portfolioCompositeView({ collection: new modalDialogsCollection()}));
		});

		vent.on('socialMedia', function(){
			app.layout.mainContentRegion.show(new socialMediaView());
		});

		vent.on('show:nav:menu', function(elements){
			if (elements.$navContainer.html().length){
				app.layout.navMenuRegion.empty();
				elements.$siteSection.removeClass('menu-open');
				elements.$navContainer.removeClass('menu-open');
			} else{
				app.layout.navMenuRegion.show(new navMenuView());
				elements.$siteSection.addClass('menu-open');
				elements.$navContainer.addClass('menu-open');
			}
		});

		vent.on('show:dialogView', function(model){
			app.layout.portfolioDialog.show(new dialogView({model: model}));
		});

		return app;
	}
);