var express = require('express');
var router = express.Router();

router.get('/:postId', function(req, res, next){
	// console.log(req.params.postId); // postId
	res.render('post', {
  	pages: [{name:'Blog', url: '/'},
  		{name: 'Portfolio', url: '/portfolio'},
  		{name: 'Contacts', url: '/contacts'}],
  	postList: [
  		{title: 'lorem ipsum.', postPrev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, maxime!', href:'/blog/1'},
  		{title: 'Lorem ipsum.', postPrev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, maxime!', href:'/blog/2'},
  		{title: 'Lorem ipsum.', postPrev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, maxime!', href:'/blog/3'},
  	]
  });
})

module.exports = router;