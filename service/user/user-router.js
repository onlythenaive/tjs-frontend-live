(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    apply: function (server, routePrefix) {
      server.use(routePrefix + it.path, it.router);
    }
  };

  it.path = '/users';

  it.router = imports.express.Router()

      .get('/', function (request, response) {
        response.json(imports.repository.findAll());
      })

      .get('/:login', function (request, response) {
        response.json(imports.repository.findByLogin(request.params.login));
      })

      .post('/', function (request, response) {
        response.json(imports.repository.create(request.body));
      });
})({

  express: require('express'),

  repository: require('./user-repository')
});
