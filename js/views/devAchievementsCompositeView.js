define (function (require) {
    'use strict';
    var App = require('app');
    var devAchievementView = require('views/devAchievementView');
    var devAchievements = require('collections/devAchievements');
    var template = require('text!../../html/devAchievementsLayout.html');
    
    return Backbone.Marionette.CompositeView.extend({
        template: _.template(template),
        className: "achievements",
        childViewContainer: '.row',
        childView: devAchievementView,
        initialize: function () {
            this.collection = new devAchievements();
        }
    });
});