var  mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	title: String,
	description: String,
	author: {name: String, login: String},
	mdLink: String, // Link to .md file of this post
	href: String, // Url that lead to post
	date: {type: Date, default: Date.now()},
	tags: [String]
}, {collection: 'posts'});

postSchema.statics.getPostList = function(dateSort, limit, skip, cb){
	this.find()
		.sort({date: dateSort})
		.skip(skip)
		.limit(limit)
		.exec(function(err, posts){
			if(err) cb(err, null);
			cb(null, posts);
		});
}

postSchema.statics.countPost = function(cb){
	this.find().count(function(err, num){
		if(err) cb(err);
		cb(null, num);
	})
}

module.exports = mongoose.model('Post', postSchema);