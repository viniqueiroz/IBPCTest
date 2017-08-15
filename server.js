  var express = require('express'),
  app = express();
//  port = process.env.PORT || 3000;

var mysqlModel = require('mysql-model');
//var connection = require('./dbConnection');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/materialRoutes');
routes(app);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
