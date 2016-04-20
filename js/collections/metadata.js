define (function (require) {
    'use strict';
    
    var metadataModel = require("models/metadata");
    
    return Backbone.Collection.extend ({
        model: metadataModel,
        url: "data/metadata.json",
        parse: function(response){
            return response.metadata;
        },
        initialize: function(){
            this.fetch();
        }
    });
});