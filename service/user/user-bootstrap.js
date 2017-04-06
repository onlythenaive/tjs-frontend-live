(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    run: function () {
      imports.repository.create({
        firstname: "Ilia",
        lastname: "Gubarev",
        login: "igubarev"
      });
    }
  };

})({

  uuid: require('uuid/v4'),

  repository: require('./user-repository')
});
