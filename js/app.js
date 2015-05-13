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
			 homeView, portfolioCompositeView, socialCodingView, portfolioCollection, 
			 portfolioDetailsView, navMenuView, vent){
		'use strict';

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

		vent.on('social-coding', function(){
			app.layout.mainContentRegion.show(new socialCodingView());
		});

		vent.on('show:nav:menu', function(elements){
			if (elements.$navContainer.html().length){
				elements.$body.removeClass('nav-open');
				elements.$overlay.addClass('hide');
				app.layout.navMenuRegion.empty();
			} else{
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
		
		$(document).on("click", "a[href^='/']", function (event) {
			var href = $(event.currentTarget).attr('href');
		
		  	//Allow shift+click for new tabs, etc.
		  	if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey)
		    	event.preventDefault();
		
		    //Remove leading slashes and hash bangs (backward compatablility)
		    var url = href.replace(/^\//,'').replace('\#\!\/','');
		
		    //Instruct Backbone to trigger routing events
		    Backbone.history.navigate(url);
			vent.trigger(url);
		
		    return false;
		}) 
		
		return app;
	}
);