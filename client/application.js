(function ($) {

  var server = $.express();

  var indexViewPath = $.path.resolve($.basePath, 'static', 'index.html');
  var staticAssetPath = $.path.resolve($.basePath, 'static');

  server

      .use('/', $.express.static(staticAssetPath))

      .get('/', function (request, response) {
        response.sendFile(indexViewPath);
      })

      .listen (5000);
})({

  basePath: __dirname,
  express: require('express'),
  path: require('path')
});
