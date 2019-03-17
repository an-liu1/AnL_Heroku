var express = require('express');
var router = express.Router();
var data = require('../data');

data.title = `Welcome to Express with Node`;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {name: "Nike Air", role: "Nike Air"});
});

router.get('/:user', (req, res, next) => {
  console.log('user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
