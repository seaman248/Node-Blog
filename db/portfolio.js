var  mongoose = require('mongoose');
var Schema = mongoose.Schema;


var portfolioSchema = new Schema({
	name: String,
	description: String,
	href: String, // Link to portfolio project
	date: {type: Date, default: Date.now()}
}, {collection: 'portfolios'}); 

var Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;