  var express = require('express'), request = require('request'),
  app = express();
//  port = process.env.PORT || 3000;

var mysqlModel = require('mysql-model');
//var connection = require('./dbConnection');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/testeRoutes');
routes(app);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

var interval = 1200000;
function doPosts() {
    request.get(
        'http://localhost:3000/teste',
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
    );
    setTimeout(doPosts, interval);
}
doPosts();
