(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    apply: function (server, routePrefix) {
      server.use(routePrefix + it.path, it.router);
    }
  };

  it.path = '/genres';

  it.router = imports.express.Router()

      .get('/', function (request, response) {
        response.json(imports.repository.findAll());
      })

      .get('/:id', function (request, response) {
        response.json(imports.repository.findById(request.params.id));
      })

      .post('/', function (request, response) {
        response.json(imports.repository.create(request.body));
      });
})({

  express: require('express'),

  repository: require('./genre-repository')
});
