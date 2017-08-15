var mysqlModel = require('mysql-model');

var connection = mysqlModel.createConnection({
  host     : 'us-cdbr-iron-east-05.cleardb.net',
  user     : 'b57a5389ae7510',
  password : 'c0d6620a',
  database : 'heroku_214a997ce559eb2',  
}); 


module.exports = {
   Teste: connection.extend({
      tableName: "teste"
  })
  
};
