function signUpValidate(){
    var myName=$("#name").val();
    var inputEmail=$("#email").val() ;
    var passwordSignUp = $("#passwordSignUp").val() ;
    var passwordConfirm = $("#passwordConfirm").val();
    
    if(passwordSignUp!=passwordConfirm) {
        $(".error").show(400);
  }else{
    $(".error").hide(400);
  }
     if( myName != "" && inputEmail!=""&& passwordSignUp!=""&& passwordConfirm !="" && passwordSignUp.length>=5 && passwordSignUp ===passwordConfirm){
       window.location.href="main.html"
    } 
};