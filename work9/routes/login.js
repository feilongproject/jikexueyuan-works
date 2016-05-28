var express = require('express');
var router  = express.Router();
var login = require('../controllers/login.con');


router.get('/', function(req, res) {
    res.render('login',{title:'登录'});
});

router.post('/',function(req,res,next){
	login.login(req,res,next);
});

module.exports = router;