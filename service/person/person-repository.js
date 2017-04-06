(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (person) {
      person.id = imports.uuid();
      person.createdAt = Date.now();
      return it.collection.insertOne(person);
    },

    update: function (person) {
      return it.collection.update(person);
    },

    findAll: function () {
      return it.collection.find({});
    },

    findById: function (id) {
      return it.collection.findOne({id: id});
    },

    findByNames: function (firstname, lastname) {
      return it.collection.findOne({firstname: firstname, lastname: lastname});
    }
  };

  it.collectionName = 'persons';

  it.collection = imports.database.collection(it.collectionName);
})({

  uuid: require('uuid/v4'),

  database: require('../utility/database')
});
