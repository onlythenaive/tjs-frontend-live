(function ($) {

  var server = $.express();

  server.use($.cors());
  server.use($.bodyParser.json());

  $.bootstraps.forEach(function (bootstrap) {
    bootstrap.run();
  });

  $.routers.forEach(function (router) {
    router.apply(server, '/data');
  });

  server.listen (3000);
})({

  bodyParser: require('body-parser'),
  cors: require('cors'),
  express: require('express'),
  path: require('path'),

  bootstraps: [
    require('./genre/genre-bootstrap.js'),
    require('./band/band-bootstrap.js'),
    require('./person/person-bootstrap.js')
  ],

  routers: [
    require('./genre/genre-router.js'),
    require('./band/band-router.js'),
    require('./person/person-router.js')
  ]
});
