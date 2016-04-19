define(function (require) {
    'use strict';
    var App = require('app');
    var template = require('text!../../html/devAchievementItem.html');
    
    return Backbone.Marionette.ItemView.extend({
        className: 'col-xs-4 col-sm-3',
        template: _.template(template)
    });
});