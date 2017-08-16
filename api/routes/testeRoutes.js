module.exports = function(app) {
  var testeList = require('../controllers/testeController');


  // todoList Routes
  app.route('/teste')
    .get(testeList.list_all_testes)
    .post(testeList.add_teste);

    app.route('/teste/:testeId')
    .get(testeList.find_teste)
    .put(testeList.update_teste)
    .delete(testeList.delete_teste);

    app.use(function(req, res) {
      res.status(404).send({url: req.originalUrl + ' not found'})
    });
};
