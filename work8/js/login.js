/*
 *登录函数 login.js
 */
(function() {
    /*login ajax 请求*/
    function login(user, pw) {
        $.ajax({
            url: '../php/login.php',
            data: {
                username: user,
                password: pw
            },
            type: 'post',
            dataType: 'json',
            success: function(data) {
                if (data) {
                    if (pw == data.password) {
                        sessionStorage.userinfo = JSON.stringify(data);
                        window.location.href = '../html/backManagement.html';
                        return true;
                    } else {
                        alert('密码错误');
                        return false;
                    }
                } else {
                    alert('用户名或密码错误');
                    return false;
                }
            },
            error: function() {
                alert('连接失败，请重新连接');
                return false;
            }
        })
    }
    $(document).ready(function() { //自动登陆
            if (typeof(localStorage.autoLogin) == "undefined") {
                localStorage.autoLogin = 0;
            }
            if (localStorage.autoLogin == 1) {
                $("#Field").attr('checked', 'true');
                login(localStorage.user, localStorage.pw);
            }
        })
        /*login动作函数*/
    var loginClick = (function() {
            $('#login').click(function(e) {
                e.preventDefault();
                var user = $('#username').val();
                var pw = $('#password').val();
                if ($("#Field").is(':checked')) {
                    localStorage.autoLogin = 1;
                    localStorage.user = user;
                    localStorage.pw = pw;
                } else {
                    localStorage.autoLogin = 0;
                    localStorage.user = '';
                    localStorage.pw = '';
                }
                // console.log($('#username').val());
                login(user, pw);
            })
        }())
        /*reset password*/
    var resetPW = (function() {
        $('#reset-pw').on('click', function(e) {
            e.preventDefault();
            $('#password').val("");
        })
    }());

}())