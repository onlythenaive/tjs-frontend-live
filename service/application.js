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
    require('./user/user-bootstrap.js')
  ],

  routers: [
    require('./user/user-router.js')
  ]
});
