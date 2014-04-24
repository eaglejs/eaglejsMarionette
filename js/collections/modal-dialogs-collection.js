define([
    "Backbone",
    "DialogModel"
],
    function (Backbone, DialogModel) {
        'use strict';

        var portfolioData = Backbone.Collection.extend({
            model: DialogModel,
            url: "data/portfolio-data.json",

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

        

        return portfolioData;
    }
);