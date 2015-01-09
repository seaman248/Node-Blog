// Define local vars
var app = require('./app.js');
var conf = require('./conf');


// Get navigation list from database
var navLinks = [{name:'Blog', url: '/'},
  		{name: 'Portfolio', url: '/portfolio'},
  		{name: 'Contacts', url: '/contacts'}];


var locables = {
	title: conf.get('locals:title'),
	navLinks: navLinks
};


module.exports = locables;