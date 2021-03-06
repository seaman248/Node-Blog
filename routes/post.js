var express = require('express');
var router = express.Router();
var md = require('node-markdown').Markdown;
var fs = require('fs');
var path = require('path');

var postHeader = 'Что-то там №';
var mdlink = 'README.markdown';


var getPost = function(link){
	var allPath = path.resolve(__dirname, '../public/md/');
	return fs.readFileSync(allPath+'/'+link).toString();
}
	


router.get('/:postId', function(req, res, next){
	if(req.params.postId){
		res.render('post', {
			post: {
				// Убрать req.params
				header: postHeader+req.params.postId,
				mdContent: md(getPost(mdlink))
			}
		});
	} else{
		next();
	}
})

// If request haven't postId params
router.get('/', function(req, res, next){
	res.redirect('/');
})

module.exports = router;