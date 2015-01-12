var express = require('express'),
	router = express.Router(),
	async = require('async'),
	db = require('../db');

async.parallel([
	function(cb){
		db.Portfolio.find(function(err, portfolios){
			if(err) cb(err);
			cb(null, portfolios);
		});
	}],
	function(err, result){
		if(err) console.log(err);
		router.get('/', function(req, res, next){
			res.render('portfolio', {
				projects: result[0]
			});
	});
});


module.exports = router;