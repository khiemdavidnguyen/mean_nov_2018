var quotes_controller = require('../controllers/quotes_controller');

module.exports = function(app) {
  app.get('/', quotes_controller.index);
  app.post('/quotes', quotes_controller.submit);
  app.get('/quotes', quotes_controller.view);
}
