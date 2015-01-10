var express = require('express');
var router = express.Router();
var db = require('../db');
var async = require('async');



async.parallel([
	function getPosts (cb){
		db.Post.find(function(err, posts){
			if(err) console.log(err);
			cb(null, posts);
		})
	}], function mainRouter (err, results){
		var postList = results[1];
		console.log(postList);
		router.get('/', function(req, res, next) {
		  res.render('index', {
		  	jumbotron: true,
		  	postList: postList
		  });
		});
	})

module.exports = router;
