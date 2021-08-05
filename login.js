function loginValidate(){
  var inputEmail=$("#inputEmail").val() ;
  var passwordLogIn = $("#passwordLogIn").val() ;
  if(inputEmail!=""&& passwordLogIn!=""&& passwordLogIn.length>=5){
      window.location.href="main.html";
  }
}
