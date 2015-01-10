var express = require('express');
var router = express.Router();
var db = require('../db');

var postList = [
  		{title: 'lorem ipsum.', postPrev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, maxime!', href:'/blog/1'},
  		{title: 'Lorem ipsum.', postPrev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, maxime!', href:'/blog/2'},
  		{title: 'Lorem ipsum.', postPrev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, maxime!', href:'/blog/3'},
  	];

// var postList = db.Post.find();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	jumbotron: true,
  	postList: postList
  });
});

module.exports = router;
