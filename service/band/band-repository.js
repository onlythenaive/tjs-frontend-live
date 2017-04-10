(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (band) {
      var newBand = {
        id: imports.uuid(),
        title: band.title,
        createdAt: Date.now(),
        genreIds: band.genreIds
      };
      return it.collection.insertOne(newBand);
    },

    update: function (band) {
      var existing = it.collection.findOne({id: band.id});
      existing.title = band.title;
      existing.genreIds = band.genreIds;
      return it.collection.update(existing);
    },

    findAll: function () {
      return it.collection.find({});
    },

    findById: function (id) {
      return it.collection.findOne({id: id});
    },

    findByTitle: function (title) {
      return it.collection.findOne({title: title});
    }
  };

  it.collectionName = 'bands';

  it.collection = imports.database.collection(it.collectionName);
})({

  uuid: require('uuid/v4'),

  genres: require('../genre/genre-repository'),
  database: require('../utility/database')
});
