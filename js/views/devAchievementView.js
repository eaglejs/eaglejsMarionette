define(function (require) {
    'use strict';
    
    var metadata = require('collections/metadata');
    var template = require('text!../../html/devAchievementItem.html');
    
    return Backbone.Marionette.ItemView.extend({
        className: 'col-xs-4 col-sm-3',
        template: _.template(template),
        collection: new metadata(),
        onShow: function () {            
            if (this.collection.length > 0)    
                this.renderMetadata(this.collection.get("achievements").toJSON());
        },
        renderMetadata: function (metadata) {
            $('meta[name="og:title"]').remove();
            $('head').append( '<meta name="og:title" content="'+metadata.id+'" />' );

            $('meta[name="og:url"]').remove();
            $('head').append( '<meta name="og:url" content="'+metadata.url+'" />' );

            $('meta[name="og:description"], meta[name="description"]').remove();
            $('head').append( '<meta name="og:description" content="'+metadata.description+'" /><meta name="description" content="'+metadata.description+'" />' );
        }
    });
});