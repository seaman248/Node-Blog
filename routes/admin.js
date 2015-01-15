var express = require('express'),
	router = express.Router();



router.get('/', function(req, res, next){
	if(req.cookies.admin = 'admin'){
		res.send('Admin Page');
	}else {
		res.redirect('/admin/auth');
	}
});

router.get('/auth', function(req, res, next){
	res.clearCookie('admin');
	res.render('auth');
})

router.post('/auth', function(req, res, next){
	res.cookie('admin', 'admin');
	res.redirect('/admin');
});

module.exports = router;