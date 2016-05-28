var express = require('express');
var router = express.Router();
var news = require('../controllers/news.con');

router.get('/', function(req, res, next) {
	news.listall(req, res, next);
});

router.post('/addNews', function(req, res, next) {
	news.add(req, res, next);
});

router.get('/search',function(req,res,next){
	news.search(req,res,next);
});

router.get('/edit',function(req,res,next){
	news.edit(req,res,next);
});

router.get('/deleteNews',function(req,res,next){
	news.delete(req,res,next);
})

module.exports = router;