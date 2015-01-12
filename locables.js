// Define local vars
var app = require('./app.js');
var conf = require('./conf');

// Get navigation list from database
var navLinks = [{name:'Блог', url: '/'},
  		{name: 'Портфолио', url: '/portfolio'},
  		{name: 'Контакты', url: '/contacts'}];


var locables = {
	title: conf.get('locals:title'),
	navLinks: navLinks
};


module.exports = locables;