var mongoose = require('mongoose');
var schemas = require('./schemas');

var Post = mongoose.model('Post', schemas.postSchema)
