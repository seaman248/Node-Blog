var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  	title: 'Seaman Blog', 
  	jumbotron: true ,
  	pages: [{name:'Blog', url: '/'},
  		{name: 'Portfolio', url: '/portfolio'},
  		{name: 'Contacts', url: '/contacts'}]
  });
});

module.exports = router;
