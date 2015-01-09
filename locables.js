// Define local vars
var app = require('./app.js');
var conf = require('./conf');


// Get navigation list from database
var pages = [{name:'Blog', url: '/'},
  		{name: 'Portfolio', url: '/portfolio'},
  		{name: 'Contacts', url: '/contacts'}];


var locables = {
	title: conf.get('locals:title'),
	pages: pages
};


module.exports = locables;