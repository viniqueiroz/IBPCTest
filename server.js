  var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var mysqlModel = require('mysql-model');
//var connection = require('./dbConnection');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/materialRoutes');
routes(app);

app.listen(port, function() {
    console.log("App is running on port " + port);
});
