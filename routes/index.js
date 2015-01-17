var express = require('express');
var router = express.Router();
var db = require('../db');
var async = require('async');


router.get('/', function(req, res, next) {
	var skip = parseInt(req.query.n) || 0;


	async.parallel([
		function getPostList (cb){
			db.Post.getPostList(1, 10, skip, function(err, posts){
				if (err) cb(err)
				cb(null, posts)
			});
		},function countPost (cb){
			db.Post.countPost(function(err, num){
				if(err) cb(err);
				cb(null, num);
			})
		}], function mainRouter (err, results){
				var postList = results[0];
				var countPosts = results[1];


				res.render('index', {
					jumbotron: true,
					postList: postList,
					countPosts: countPosts,
					skip: skip
				});


	});


});

module.exports = router;


