define (function (require) {
    'use stritc';
    
    var devAchievement = require("models/devAchievement");
    
    return Backbone.Collection.extend({
        model: devAchievement,
        url: "https://teamtreehouse.com/joshuaeagle.json",
        parse: function (response) {
            return response.badges;
        },
        initialize: function () {
            this.fetch();
        }
    });
});