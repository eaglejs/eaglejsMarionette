define(function(require){
		'use strict';
		
		var template = require('text!../../html/navMenu.html');
		return Backbone.Marionette.ItemView.extend({
			tagName: 'ul',
			template: _.template(template),
			events: {
				'click a': 'handleSelected'
			},
			onRender: function(){
				var $currentPage = $('#main-content > div'),
					$navMenuBtns = this.$el.find('a');
					
					$navMenuBtns.closest('.' + $currentPage.attr("class") + "-btn").addClass("selected");
			},
			handleSelected: function(e){
				
				var $currentTarget = $(e.currentTarget),
					$navMenuBtns = $('.nav-container a');
					
					$navMenuBtns.removeClass('selected');
					$currentTarget.addClass('selected');
			}
		});
	}
);