var mongoose = require('mongoose');
var schemas = require('./schemas');

module.exports.Post = mongoose.model('Post', schemas.postSchema);
module.exports.Portfolio = mongoose.model('Portfolio', schemas.portfolioSchema);
