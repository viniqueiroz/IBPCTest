module.exports = function(app) {
  var materialList = require('../controllers/materialController');


  // todoList Routes
  app.route('/teste')
    .get(materialList.list_all_testes);
  //  .post(materialList.add_teste);

    app.use(function(req, res) {
      res.status(404).send({url: req.originalUrl + ' not found'})
    });
};
