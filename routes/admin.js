var express = require('express'),
	router = express.Router(),
	User = require('../db').User,
	async = require('async');

// console.log(User.checkPass('23'));

router.get('/', function(req, res, next){
	var userCookie = req.cookies.admin;
	async.parallel([
		function(cb){
			User.findOne({_id: userCookie}, function(err, user){
				if(err || !user) cb(err || null);
				cb(null, user);
			});
		}], function(err, resultArr){
			if(err) next(err);
			if(resultArr[0]){
				res.render('admin', {
					admin: true,
				});
			}
			else res.redirect('/admin/auth');
		});
});

router.get('/auth', function(req, res, next){
	res.clearCookie('admin');
	res.render('auth');
})

router.post('/auth', function(req, res, next){
	User.findOne({username: req.param('username')},function(err, user){
		if(err || !user.checkPass(req.param('pass'))){
			res.render('auth', {err: err, pass: 'Password is nor correct'});
		} else{
			console.log(user.username + ' ' + user.id);
			res.cookie('admin', user.id);
			res.redirect('/admin');
		}
	});
});

module.exports = router;