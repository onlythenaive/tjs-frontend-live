(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (genre) {
      genre.id = imports.uuid();
      return it.collection.insertOne(genre);
    },

    update: function (genre) {
      return it.collection.update(genre);
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
