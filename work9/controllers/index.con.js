var news = require('../modules/news_list');
var dateFomate = require('../modules/dateFomate');

module.exports = {
	index: function(req, res, next) {
		var sql = 'select * from main order by adddate desc limit 0,4';
		var args = [];
		news.getNewslist(sql, args, next, function(err, result) {
			if (err) next(err);
			result.forEach(function(result){
				result.adddate = dateFomate.method1(result.adddate);
			});
			res.render('index', {newsshow:result});	
		});
	}
};