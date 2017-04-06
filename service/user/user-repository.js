(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (user) {
      user.id = imports.uuid();
      user.createdAt = Date.now();
      return it.collection.insertOne(user);
    },

    update: function (entity) {
      return it.collection.update(user);
    },

    findAll: function () {
      return it.collection.find({});
    },

    findByLogin: function (login) {
      return it.collection.findOne({login: login});
    }
  };

  it.collectionName = 'users';

  it.collection = imports.database.collection(it.collectionName);
})({

  uuid: require('uuid/v4'),

  database: require('../utility/database')
});
