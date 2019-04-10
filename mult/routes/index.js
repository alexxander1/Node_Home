var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hackers' });
});

/* Hacker page */
router.get('/Hacker1', function(req, res, next) {
  res.render('hackers', { title: 'страница хакера:)',
  picture: 'images/Hacker1.jpg',
  desc: 'truHacker by TruDep' });//('<h1>страница хакера:)</h1>');
});

/* about us page */
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'hacers'});
});

/* main us page */
router.get('/main', function(req, res, next) {
  res.render('main', {title: 'hacers'});
});

/* matrix us page */
router.get('/matrix', function(req, res, next) {
  res.render('matrix', {title: 'hacers'});
});

/* 12test us page */
router.get('/12test', function(req, res, next) {
  res.render('12test', {title: 'hacers'});
});


module.exports = router;
