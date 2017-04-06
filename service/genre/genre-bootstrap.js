(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    run: function () {

      it.data = [
        {
          title: "Rock"
        },
        {
          title: "Hard Rock"
        },
        {
          title: "Blues"
        },
        {
          title: "Rock And Roll"
        }
      ];

      it.data.forEach(imports.repository.create);
    }
  };
})({

  uuid: require('uuid/v4'),

  repository: require('./genre-repository')
});
