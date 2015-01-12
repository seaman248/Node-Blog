var  mongoose = require('mongoose');
var models = require('./models.js');
var conf = require('../conf');

mongoose.connect(conf.get('db_connect'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Post = models.Post;
module.exports.Post = Post;

var Portfolio = models.Portfolio;
module.exports.Portfolio = Portfolio;

/*
	Example of post insert operation
*/

// var post = new Post({
// 	title: 'post7',
// 	description: 'This is the post about nothing',
// 	autor: 'Lorem ipsum',
// 	mdLink: 'README.MD',
// 	href: '/blog/1',
// 	date: Date.now(),
// 	tags: ['tag1', 'tag2', 'tag3']
// });

// post.save(function(err, post){
// 	if(err) console.log(err);
// 	console.log(post.title);
// })

/*
	Example of posts select
*/

// Post.find(function(err, posts){
// 	if(err) console.log(err);
// 	console.log(posts);
// })

/**
*	Example of portfolio insert operation
*/

// var portfolio = new Portfolio({
// 	name: 'Site20',
// 	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolor!',
// 	href: '#',
// 	date: Date.now()
// });

// portfolio.save(function(err, portfolio){
// 	if(err) console.log(err);
// 	console.log(portfolio.name + ' is saved in database!');
// });

/**
*	Multiple insert
*/

// for (var i = 0; i<100 ; i+=1){
// 	(function(e){
// 		var portfolio = new Portfolio({
// 			name: 'Site' + e,
// 			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolor!',
// 			href: '#',
// 			date: Date.now()
// 		});

// 		portfolio.save(function(err, portfolio){
// 			if(err) console.log(err);
// 			console.log(portfolio.name + ' is saved in database!');
// 		});
// 	})(i)
// }