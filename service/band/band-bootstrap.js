(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    run: function () {

      var rock = imports.genres.findByTitle("Rock").id;
      var hardRock = imports.genres.findByTitle("Hard Rock").id;
      var blues = imports.genres.findByTitle("Blues").id;
      var rockAndRoll = imports.genres.findByTitle("Rock And Roll").id;

      it.data = [
        {
          title: "Led Zeppelin",
          genreIds: [blues, hardRock]
        },
        {
          title: "The Beatles",
          genreIds: [rock, rockAndRoll]
        },
        {
          title: "The Rolling Stones",
          genreIds: [blues, rock, rockAndRoll]
        }
      ];

      it.data.forEach(imports.repository.create);
    }
  };
})({

  uuid: require('uuid/v4'),

  genres: require('../genre/genre-repository'),
  repository: require('./band-repository')
});
