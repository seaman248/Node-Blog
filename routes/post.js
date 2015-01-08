var express = require('express');
var router = express.Router();

router.get('/:postId', function(req, res, next){
	// console.log(req.params.postId); // postId
	res.render('post', {
  	pages: [{name:'Blog', url: '/'},
  		{name: 'Portfolio', url: '/portfolio'},
  		{name: 'Contacts', url: '/contacts'}],
  	post: {
  		header: 'Что-то там №'+req.params.postId,
  		text: 'Something .md file Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate recusandae enim repudiandae, ipsa accusantium, eos, cum beatae dolor accusamus id est vitae quia necessitatibus sed veniam laudantium temporibus saepe quasi.'
  	}
  });
})

module.exports = router;