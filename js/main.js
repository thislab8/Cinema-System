function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}


function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    }); 
    $('.error').removeClass('alert alert-danger').html('');

}




function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);

}

function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });

        $('.modal-title').html('Login with');
    });       
    $('.error').removeClass('alert alert-danger').html(''); 
}



function shakeModal(error){
    $('#loginModal .modal-dialog').addClass('shake');
    $('.error').addClass('alert alert-danger').html(error);
    $('input[type="password"]').val('');
    $('input[type="text"]').val('');
    setTimeout( function(){ 
        $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}

function registrationComplete(){
    $('#loginModal .modal-dialog').addClass('');
    $('.error').addClass('alert successfully-submit').html("Registration Complete,Please LogIn");
    $('input[type="password"]').val('');
    $('input[type="text"]').val('');

    setTimeout( function(){ 
        $('#loginModal .modal-dialog').removeClass(''); 
    }, 1000 ); 
}