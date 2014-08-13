define(["Marionette"], function(Marionette){
	'use strict'

	var SurakusaApp = new Marionette.Application();

	SurakusaApp.addRegions({
		headerRegion: "header",
		mainContentRegion: "#main-content",
		footerRegion: "footer"
	});

	SurakusaApp.navigate = function(route, options){
		options || (options = {});
		Backbone.History.navigate(route, options);
	}

	SurakusaApp.getCurrentRoute = function(){
		return Backbone.history.fragment
	}

	SurakusaApp.startSubApp = function(appName, args){
		var currentApp = appName ? SurakusaApp.module(appName) : null;

		if (SurakusaApp.currentApp === currentApp){ return;}

		if (SurakusaApp.currentApp){
			SurakusaApp.currentApp.stop();
		}

		SurakusaApp.currentApp = currentApp;

		if(currentApp){
			currentApp.start(args);
		}
	}

	SurakusaApp.on("initialize:after", function(){
		if(Backbone.history){
			console.log('hi');
		}
	});

	return SurakusaApp;

});