function loginValidate(){
  var inputEmail=$("#inputEmail1").val() ;
  var passwordLogIn = $("#passwordLogIn").val() ;
  if(inputEmail!=""&& passwordLogIn!=""&& passwordLogIn.length>=5){
      window.location.href="main.html";
  }
}
