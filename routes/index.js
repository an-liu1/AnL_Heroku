var express = require('express');
var router = express.Router();
var data = require('../data');
var indexdata = require('../indexdata');

data.title = `Welcome to Express with Node`;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', {name: "Nike Air", navlist: "SHOP", bannerimg1: "shoe1.png", bannerimg2: "shoe2.png", bannerimg3: "shoe3.png"});
// });

router.get('/', function(req, res, next) {
  res.render('index', {shoedata: indexdata, name: "Nike Air", navlist: "SHOP", bannerimg1: "shoe1.png", bannerimg2: "shoe2.png", bannerimg3: "shoe3.png"});
});

router.get('/:shoe', (req, res, next) => {
  console.log('user:', data[req.params.shoe]);
  res.render('shoe', data[req.params.shoe]);
});

module.exports = router;
