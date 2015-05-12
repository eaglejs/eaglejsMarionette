define(['backbone', 'marionette', 'global', 'jquery', 'underscore', 'text!../html/navMenu.html'], 
	function(Backbone, Marionette, global, $, _, template){
		'use strict';
		return Backbone.Marionette.ItemView.extend({
			tagName: 'ul',
			template: _.template(template),
			events: {
				'click a': 'handleSelected'
			},
			onRender: function(){
				var $currentPage = $('#main-content > div'),
					navMenuBtns = this.el.querySelectorAll('a');

					if ($currentPage.hasClass('home')){
						navMenuBtns[0].classList.add('selected');
					} else if ($currentPage.hasClass("portfolio")){
						navMenuBtns[1].classList.add('selected');
					} else if ($currentPage.hasClass("social-coding")){
						navMenuBtns[2].classList.add('selected');
					}
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