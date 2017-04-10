(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (person) {
      var newPerson = {
        id: imports.uuid(),
        firstname: person.firstname,
        lastname: person.lastname,
        bandId: person.bandId,
        createdAt: Date.now()
      };
      return it.collection.insertOne(newPerson);
    },

    update: function (person) {
      var existing = it.collection.findOne({id: person.id});
      existing.firstname = person.firstname;
      existing.lastname = person.lastname;
      existing.bandId = person.bandId;
      return it.collection.update(existing);
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
