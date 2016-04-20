define(['jquery', 'underscore', 'backbone', 'marionette', 'bootstrap'], function () {

	'use strict';

	var App = new Backbone.Marionette.Application();
	
	App.$el = $("body");
	
	App.addRegions({
		mainRegion: "body"
	});
	
	$(document).on("click", "a[href^='/']", function (event) {
		var href = $(event.currentTarget).attr('href');
	
		//Allow shift+click for new tabs, etc.
		if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey)
			event.preventDefault();
	
		//Remove leading slashes and hash bangs (backward compatablility)
		var url = href.replace('\#\!\/','');
	
		//Instruct Backbone to trigger routing events
		Backbone.history.navigate(url, {trigger: true});
		//App.vent.trigger(url);
	
		return false;
	});

	return App;
});