var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/novedades', function(req, res, next) {
  res.render('novedades', { title: 'Tarea' });
});

module.exports = router;
