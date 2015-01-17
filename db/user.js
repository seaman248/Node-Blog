var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var userSchema = new Schema({
	role: {type: String, require: true},
	username: {type: String, unique: true, required: true},
	hashedPass: {type: String, required: true},
	salt: {type: String, required: true},
	date: {type: Date, default: Date.now()}
}, {collection: 'users'});

userSchema.methods.encryptPass = function(pass){
	return crypto.createHmac('sha1', this.salt).update(pass).digest('hex');
}

userSchema.virtual('pass')
	.set(function(pass){
		this._plainPass = pass;
		this.salt = crypto.randomBytes(32).toString('base64');
		this.hashedPass = this.encryptPass(pass);
	})
	.get(function(){
		return this._plainPass;
	});

userSchema.methods.checkPass = function(pass){
	return this.encryptPass(pass) === this.hashedPass;
}


var User = mongoose.model('User', userSchema);

module.exports = User;