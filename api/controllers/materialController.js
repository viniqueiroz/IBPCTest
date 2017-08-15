var connection = require('../../dbConnection.js');

var Teste = new connection.Teste();

exports.list_all_testes = function(req, res) {
  Teste.find('all', function(err, teste) {
    if (err)
      res.send(err);
    res.json(teste);
  });
};
exports.add_teste = function(req, res) {
  var novoTeste = new connection.Teste(nome: req.body.nome ,
  ano: req.body.ano);
  novoTeste.save(function(err, teste) {
    if (err)
      res.send(err);
    res.json(teste);
  });
};
