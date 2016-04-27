define (function (require) {
    'use strict';
    
    var devAchievementView = require('views/devAchievementView');
    var devAchievements = require('collections/devAchievements');
    var template = require('text!../../html/devAchievementsLayout.html');
    
    devAchievements = new devAchievements();
    
    return Backbone.Marionette.CompositeView.extend({
        template: _.template(template),
        className: "achievements",
        childViewContainer: '.row',
        childView: devAchievementView,
        initialize: function () {
            this.collection = devAchievements;
        }
    });
});