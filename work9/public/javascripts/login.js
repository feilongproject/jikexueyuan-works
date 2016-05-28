/*
 *登录函数 login.js
 */
(function() {
    var focus = $('input').focus(function(){
        $('.alert').remove();
    })
        /*reset password*/
    var resetPW = (function() {
        $('#reset-pw').on('click', function(e) {
            e.preventDefault();
            $('#password').val("");
        })
    }());

}())