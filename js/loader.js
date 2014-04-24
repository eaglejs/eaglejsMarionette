define([
	'Backbone',
	'Marionette',
	'LayoutView',
	'HeaderView',
	'HomeView',
	'PortfolioView',
	'DialogView',
	'SocialMediaView',
	'FooterView'
], 

	function(Backbone, Marionette, layoutView, headerView, homeView, portfolioView, dialogView, socialMediaView, footerView){
	
		var MyApp = new Backbone.Marionette.Application();

		MyApp.addRegions({
			mainRegion: "body"
		});

		var MyRouter = Backbone.Marionette.AppRouter.extend({
			appRoutes: {
				'': 'main',
				'home': 'main',
				'portfolio': 'portfolio',
				'social-media': 'socialMedia'
			}
		});

		var MyController = Backbone.Marionette.Controller.extend({
			initialize: function(){
				this.layout = new layoutView();
				MyApp.mainRegion.show(this.layout);
			},
			main: function(){
				this.layout.headerRegion.show(new headerView());
				this.layout.mainContentRegion.show(new homeView());
				this.layout.footerRegion.show(new footerView());
			},
			portfolio: function(){

			},
			socialMedia: function(){

			}
		});

		var newController = new MyController();

		newController.main();
	}
)