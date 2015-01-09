var  db = require('mongoose');

var Schema = mongoose.Schema;

module.exports.postSchema = newSchema({
	title: String,
	author: String,
	mdLink: String,
	date: {type: Date, default: Date.now},
	tags: [String]
});


