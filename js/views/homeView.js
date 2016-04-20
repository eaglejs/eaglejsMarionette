define(function (require) {
        'use strict';
        var metadata = require('collections/metadata');
        var template = require('text!../../html/home.html');
        return Backbone.Marionette.ItemView.extend({
            template : _.template(template),
            collection: new metadata(),
            className: 'home',
            initialize: function () {
                this.collection.bind("sync", this.render, this);
            },
            onShow: function () {            
                if (this.collection.length > 0)    
                    this.renderMetadata(this.collection.get("home").toJSON());
            },
            renderMetadata: function (metadata) {
                $('meta[name="og:title"]').remove();
                $('head').append( '<meta name="og:title" content="'+metadata.id+'">' );

                $('meta[name="og:url"]').remove();
                $('head').append( '<meta name="og:url" content="'+metadata.url+'">' );

                $('meta[name="og:description"]').remove();
                $('head').append( '<meta name="og:description" content="'+metadata.description+'">' );
            }
        });
    }
);