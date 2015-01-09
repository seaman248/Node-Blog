var  mongoose = require('mongoose');

var Schema = mongoose.Schema;


/*
	Schema of posts
*/

var postSchema = new Schema({
	title: {
		type: String,

	},
	description: String,
	author: {name: String, login: String},
	mdLink: String,
	date: {type: Date, default: Date.now},
	tags: [String]
}, {collection: 'posts'});

// Methods of postShema
postSchema.virtual('tags.get').get(function(){
	return this.tags;
});

postSchema.virtual('tags.set').set(function(tagsStr){
	if(tagsStr)
		this.tags = tagsStr.split(', ');
});
// Export
module.exports.postSchema = postSchema;


