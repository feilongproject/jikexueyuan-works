
/*
*退出函数 logout.js
 */

(function(){
	var logout = (function(){
		$('#logout').on('click', function(e) {
			e.preventDefault();
			localStorage.autoLogin = 0;
			localStorage.user = '';
			localStorage.pw = '';
			sessionStorage.userinfo = '';
			window.location.href = '../html/login.html';
		})
	}())
}())
