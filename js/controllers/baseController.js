define(function (require) {
  'use strict';
  var App = require('app');
  var Header = require('views/headerView');
  var NavMenuView = require('views/navMenuView');
  var Footer = require('views/footerView');
  var Layout = require('views/layout');
  
  return Backbone.Marionette.Controller.extend({
    initialize: function () {
		var that = this;
		
		App.views = {};
		App.views.header = new Header();
		App.views.footer = new Footer();
		App.views.layout = new Layout();
		App.views.navMenu = new NavMenuView();
		
		App.mainRegion.show(App.views.layout);
		App.views.layout.headerRegion.show(App.views.header);
		App.views.layout.navMenuRegion.show(App.views.navMenu);
		App.views.layout.footerRegion.show(App.views.footer);
		
		App.vent.on('home', function () {
			that.home();
		});
		App.vent.on('portfolio', function () {
			that.portfolio();
		});
		App.vent.on('social-coding', function () {
			that.socialCoding();
		});
		App.vent.on('achievements', function () {
			that.achievements();
		});
		App.vent.on('show:nav:menu', function(elements){
			that.showNavMenu(elements);
		});
		App.vent.on('hide:nav:menu', function(elements){
			that.hideNavMenu(elements);
		});
		App.vent.on('show:portfolioDetails', function(model){
			that.showPortfolioDetails(model);
		});
    },
	home: function () {
		var HomeView = require('views/homeView');
		App.views.home = new HomeView();
		App.views.layout.mainContentRegion.show(App.views.home);
	},
	portfolio: function () {
		var PortfolioCompositeView = require('views/portfolioCompositeView');
		App.views.portfolioComposite = new PortfolioCompositeView();
		App.views.layout.mainContentRegion.show(App.views.portfolioComposite);
	},
	socialCoding: function () {
		var SocialCodingView = require('views/socialCodingView');
		App.views.socialCoding = new SocialCodingView();
		App.views.layout.mainContentRegion.show(App.views.socialCoding);	
	},
	achievements: function () {
		var DevAchievementsCompositeView = require("views/devAchievementsCompositeView");
		App.views.devAchievementsComposite = new DevAchievementsCompositeView();
		App.views.layout.mainContentRegion.show(App.views.devAchievementsComposite);
	},
	showNavMenu: function (elements) {
		App.views.navMenu.render();
		elements.$body.addClass('nav-open');
		elements.$overlay.removeClass('hide');
	},
	hideNavMenu: function (elements) {
		elements.$body.removeClass('nav-open');
		elements.$overlay.addClass('hide');
	},
	showPortfolioDetails: function (model) {
		var PortfolioDetailsView = require('views/portfolioDetailsView');
		App.views.portfolioDetails = new PortfolioDetailsView({model: model});
		App.views.layout.mainContentRegion.show(App.views.portfolioDetails);
	}
  });
});
