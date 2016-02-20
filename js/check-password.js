/*$('password_field2').blur(function() {
    var pass = $('#password_field').val();
    var repass = $('#password_field2').val();

    if (($('input[name=password]').val().length == 0) || ($('input[name=repassword]').val().length == 0)){
        $('#password').addClass('has-error');
    }

    if (pass != repass) {
        $('#password_field').addClass('has-error');
        $('#password_field2').addClass('has-error');

        $('#submit_button').addClass('disabled');
    }

    else {
        $('#password').removeClass().addClass('has-success');
        $('#repassword').removeClass().addClass('has-success');
    }
});*/

$('input').on('input', function() {
    var pw1 = $('#password_field').val();
    var pw2 = $('#password_field2').val();

    if (pw1.length >= 6 && pw2.length >= 6) {

        if (pw1 == pw2) {
            $('#submit_button').removeAttr("disabled","disabled");
            $('#password_label').css("visibility", "hidden");
        } else {
            $('#password_label').css("visibility", "visible");
            $('#submit_button').attr("disabled","disabled");
        }
    } else {
        $('#submit_button').attr("disabled","disabled");
    }

});