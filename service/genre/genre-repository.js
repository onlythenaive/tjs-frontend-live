(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (genre) {
      var newGenre = {
        id: imports.uuid(),
        title: genre.title
      };
      return it.collection.insertOne(newGenre);
    },

    update: function (genre) {
      var existing = it.collection.findOne({id: genre.id});
      existing.title = genre.title;
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

  it.collectionName = 'genres';

  it.collection = imports.database.collection(it.collectionName);
})({

  uuid: require('uuid/v4'),

  database: require('../utility/database')
});
