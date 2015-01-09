var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('contacts', {
		pages: [{name:'Blog', url: '/'},
			{name: 'Portfolio', url: '/portfolio'},
			{name: 'Contacts', url: '/contacts'}],
	})
})

module.exports = router;