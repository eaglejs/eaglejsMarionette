define([
    "backbone",
    "DialogModel"
],
    function (Backbone, dialogModel) {
        'use strict';

        return Backbone.Collection.extend({
            model: dialogModel,
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