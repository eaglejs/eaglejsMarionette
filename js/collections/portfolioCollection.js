define(function (require) {
        'use strict';
        var App = require('app');
        var portfolioModel = require('models/portfolioModel');
        return Backbone.Collection.extend({
            model: portfolioModel,
            url: "data/portfolioData.json",
            parse: function(response){
                return response.portfolioList;
            },
            initialize: function(){
                this.fetch({async: false});
            },
            findById: function(id){
                return this.find(function(model){
                    return model.id === id;
                });

            }
        });
    }
);