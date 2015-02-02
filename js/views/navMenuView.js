define(['backbone', 'marionette', 'jquery', 'underscore', 'text!../html/navMenu.html'], 
	function(Backbone, Marionette, $, _, template){
		'use strict';
		return Backbone.Marionette.ItemView.extend({
			tagName: 'ul',
			template: _.template(template),
			onShow: function(){
				var $currentPage = $('#site-container > div'),
					$navMenuBtns = $('.nav-container a');

					if ($currentPage === "home"){
						$navMenBtns[0].addClass('selected');
					} else if ($currentPage === "portfolio"){
						$navMenBtns[1].addClass('selected');
					} else if ($currentPage === "social-coding"){
						$navMenBtns[1].addClass('selected');
					}
			}
		});
	}
);