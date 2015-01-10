var  mongoose = require('mongoose');
var models = require('./models.js');
var conf = require('../conf');

mongoose.connect(conf.get('db_connect'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports.Post = models.Post;