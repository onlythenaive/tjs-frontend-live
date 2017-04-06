(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (band) {
      band.id = imports.uuid();
      band.createdAt = Date.now();
      return it.collection.insertOne(band);
    },

    update: function (band) {
      return it.collection.update(band);
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

  database: require('../utility/database')
});
