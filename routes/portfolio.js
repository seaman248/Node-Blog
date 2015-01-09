var express = require('express'),
	router = express.Router();


router.get('/', function(req, res, next){
	res.render('portfolio', {
		projects: [{name: 'alala', href: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quidem doloremque incidunt vitae! Perferendis sapiente mollitia numquam nesciunt vitae maxime eos blanditiis, iste repellat, omnis aliquam, earum. Voluptatibus, earum sunt.'}
		]
	});
})

module.exports = router;