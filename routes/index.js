var express = require('express');
var router = express.Router();
var db = require('../db');
var async = require('async');


router.get('/', function(req, res, next) {
	var skip = parseInt(req.query.n) || 0;
	async.parallel([
		function getPosts (cb){
			db.Post
				.find()
				.sort({date:1})
				.skip(skip)
				.limit(10)
				.exec(function(err, posts){
						if(err) console.log(err);
						cb(null, posts);
			})
		},function getNumberOfPost (cb){
			db.Post.find().count(function(err, num){
				cb(null, num);
			})
		}], function mainRouter (err, results){
				var postList = results[0];
				res.render('index', {
				jumbotron: true,
				postList: postList,
				countPosts: results[1],
				skip: skip
			});
	});
});

module.exports = router;


