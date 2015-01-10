var  mongoose = require('mongoose');
var models = require('./models.js');
var conf = require('../conf');

mongoose.connect(conf.get('db_connect'));

module.exports.postSchema = models.postSchema;