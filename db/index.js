var  mongoose = require('mongoose');
var models = require('./models.js');
var conf = require('../conf');

mongoose.connect(conf.get('db_connect'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Post = models.Post;
module.exports.Post = Post;

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