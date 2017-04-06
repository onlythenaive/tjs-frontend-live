(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    run: function () {

  
      var ledZeppelin = imports.bands.findByTitle("Led Zeppelin").id;
      var beatles = imports.bands.findByTitle("The Beatles").id;
      var stones = imports.bands.findByTitle("The Rolling Stones").id;

      it.data = [
        {
          firstname: "Mick",
          lastname: "Jagger",
          bandId: stones
        },
        {
          firstname: "Keith",
          lastname: "Richards",
          bandId: stones
        },
        {
          firstname: "Charlie",
          lastname: "Watts",
          bandId: stones
        },
        {
          firstname: "Ronnie",
          lastname: "Woods",
          bandId: stones
        },

        {
          firstname: "Paul",
          lastname: "McCartney",
          bandId: beatles
        },
        {
          firstname: "John",
          lastname: "Lennon",
          bandId: beatles
        },
        {
          firstname: "George",
          lastname: "Harrison",
          bandId: beatles
        },
        {
          firstname: "Ringo",
          lastname: "Starr",
          bandId: beatles
        },

        {
          firstname: "Robert",
          lastname: "Plant",
          bandId: ledZeppelin
        },
        {
          firstname: "Jimmy",
          lastname: "Page",
          bandId: ledZeppelin
        },
        {
          firstname: "John",
          lastname: "Bohnam",
          bandId: ledZeppelin
        },
        {
          firstname: "John",
          lastname: "Paul Jones",
          bandId: ledZeppelin
        }
      ];

      it.data.forEach(imports.repository.create);
    }
  };
})({

  uuid: require('uuid/v4'),

  bands: require('../band/band-repository'),
  repository: require('./person-repository')
});
