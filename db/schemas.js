var  mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;


/*
	Schema of posts
*/

var postSchema = new Schema({
	title: String,
	description: String,
	author: {name: String, login: String},
	mdLink: String, // Link to .md file of this post
	href: String, // Url that lead to post
	date: {type: Date, default: Date.now()},
	tags: [String]
}, {collection: 'posts'}); //Name of this schema

// Methods of postShema
postSchema.virtual('tags.get').get(function(){
	return this.tags;
});

postSchema.virtual('tags.set').set(function(tagsStr){
	if(tagsStr)
		this.tags = tagsStr.split(', ');
});

postSchema.methods.getPosts = function(cb){
	this.model('Post').find(cb);
}
// Export
module.exports.postSchema = postSchema;


/*
db.posts.save({title: 'Post1',description: 'This is the post about nothing',autor: 'Lorem ipsum',mdLink: 'README.MD',href: '/blog/1',date: Date.now(),tags: ['tag1', 'tag2', 'tag3']});
db.posts.save({
	title: 'Post1',
	description: 'This is the post about nothing',
	autor: 'Lorem ipsum',
	mdLink: 'README.MD',
	href: '/blog/1',
	date: Date.now(),
	tags: ['tag1', 'tag2', 'tag3']});
*/


var portfolioSchema = new Schema({
	name: String,
	description: String,
	href: String, // Link to portfolio project
	date: {type: Date, default: Date.now()}
}, {collection: 'portfolios'}); 

module.exports.portfolioSchema = portfolioSchema;

/**
*	User Schema
*/


var userSchema = new Schema({
	role: {type: String, require: true},
	username: {type: String, unique: true, required: true},
	hashedPass: {type: String, required: true},
	salt: {type: String, required: true},
	date: {type: Date, default: Date.now()}
});

/**
*	User Schema methods
*/

userSchema.methods.encryptPass = function(pass){
	return crypto.createHmac('sha1', this.Salt).update(pass).digest('hex');
}