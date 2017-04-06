(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    collection: function (name) {
      var result = it.loki.getCollection(name);
      return result ? result : it.loki.addCollection(name);
    }
  };

  it.loki = new imports.loki();
})({

  loki: require('lokijs'),
});
