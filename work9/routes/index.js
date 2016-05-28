var express = require('express');
var router  = express.Router();
var index    = require('../controllers/index.con');
var news    = require('../controllers/news.con');
/**
 * [百度新闻首页]
 */
router.get('/', function(req, res, next) {
  index.index(req,res,next);
});

router.get('/news/list', function(req, res, next) {
    news.list(req, res, next);
});


module.exports = router;
