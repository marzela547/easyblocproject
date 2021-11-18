var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/hw/login', function(req, res, next){
  res.render('login', {title:'Login Autenticación'});
});

router.get('/api/hw/github/getinfo', function(req, res, next){
  res.render('github', {title:'Github Autenticación'});
});

module.exports = router;
