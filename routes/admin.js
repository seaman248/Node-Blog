var express = require('express'),
	router = express.Router();



router.get('/', function(req, res, next){
	if(req.cookies.admin){
		res.send('Admin Page');
	}else {
		res.redirect('/admin/auth');
	}
});

router.get('/auth', function(req, res, next){
	res.render('auth');
})
module.exports = router;