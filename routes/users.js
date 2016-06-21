var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hola mundo');
});
router.get('/enero', function(req, res, next) {
  res.send('enero');
});
module.exports = router;
