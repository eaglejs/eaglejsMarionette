define(function (require) {
        'use strict';
        var App = require('app');
        var metadata = require('collections/metadata');
        var template = require('text!../../html/portfolioItem.html');
        return Backbone.Marionette.ItemView.extend({
        	className: 'col-xs-3',
            template : _.template(template),
            collection: new metadata(),
            events: {
            	'click .portfolio-item': 'showPortfolioItem'
            },
            initialize: function () {
                this.collection.bind("sync", this.render, this);
            },
            onShow: function () {            
                if (this.collection.length > 0)    
                    this.renderMetadata(this.collection.get("portfolio").toJSON());
            },
            renderMetadata: function (metadata) {
                $('meta[name="og:title"]').remove();
                $('head').append( '<meta name="og:title" content="'+metadata.id+'">' );

                $('meta[name="og:url"]').remove();
                $('head').append( '<meta name="og:url" content="'+metadata.url+'">' );

                $('meta[name="og:description"], meta[name="description"]').remove();
                $('head').append( '<meta name="og:description" content="'+metadata.description+'" /><meta name="description" content="'+metadata.description+'" />' );
            },
            showPortfolioItem: function(){
                this.onBeforeDestroy = "";
            	App.vent.trigger('show:portfolioDetails', this.model);
            }

        });
    }
);