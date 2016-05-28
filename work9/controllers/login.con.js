var user = require('../modules/user');

module.exports = {
	login: function(req, res, next) {
		var username = req.body.username;
		var password = req.body.password;
		// console.log(username);
		var isAuto = req.body.Field;
		var sql = "SELECT * FROM user WHERE userName = ?";
		var args = [username];
		user.getUserByUserName(sql, args, next, function(err, result) {
			if (err) next(err);
			console.log(result);
			if (result == '') {
				res.locals.error = '用户不存在';
				res.render('login', {
					error: res.locals.error
				});
				return;
			} else if (result[0].userName != username || result[0].password != password) {
				res.locals.error = '用户名或密码错误';
				res.render('login', {
					error: res.locals.error
				});
				return;
			} else {
				if (isAuto) {
					res.cookie('islogin', username, {
						maxAge: 60000
					});
				}
				res.locals.username = username;
				req.session.username = res.locals.username;
				console.log(req.session.username);
				res.redirect('/backManagement');
			}
		});
	}
}