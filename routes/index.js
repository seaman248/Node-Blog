var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  	title: 'Seaman Blog', 
  	jumbotron: true ,
  	pages: [{name:'Blog', url: '/'},
  		{name: 'Portfolio', url: '/portfolio'},
  		{name: 'Contacts', url: '/contacts'}],
  	postList: [
  		{title: 'Lorem ipsum.', postPrev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, maxime!', href:'/blog/1'},
  		{title: 'Lorem ipsum.', postPrev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, maxime!', href:'/blog/2'},
  		{title: 'Lorem ipsum.', postPrev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, maxime!', href:'/blog/3'},
  	]
  });
});

module.exports = router;
