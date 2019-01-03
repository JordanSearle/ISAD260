
function Nav() {
  var navbar = document.getElementById("mySidenav")
    if($(mySidenav).width() == "0"){
      $(mySidenav).width(250);
      $(".main-content").css( { marginLeft : "250px"} );
    }else{
      $(mySidenav).width(0);
      $(".main-content").css( { marginLeft : "0px"} );
    }
}
