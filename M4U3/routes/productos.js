var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'Tarea' });
});

module.exports = router;
