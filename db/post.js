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

postSchema.methods.getPosts = function(cb){
	this.model('Post').find(cb);
}

module.exports = mongoose.model('Post', postSchema);