var express = require('express');
var router = express.Router();
var db = require('../db');
var async = require('async');


router.get('/', function(req, res, next) {
	async.parallel([
		function getPosts (cb){
			db.Post
				.find()
				.sort({date:1})
				.skip(0)
				.limit(10)
				.exec(function(err, posts){
						if(err) console.log(err);
						cb(null, posts);
			})
		}], function mainRouter (err, results){
				var postList = results[0];
				res.render('index', {
				jumbotron: true,
				postList: postList
			});
	});
});

module.exports = router;


