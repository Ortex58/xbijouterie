$(document).ready(function() {
//Burger open, close
$(".sandwich, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
});


//show menu click
$(".sandwich").click(function(){
    $(".header__menu__nav ul").slideToggle(1500);
    $(".header__content").slideToggle(1500);
   
});

});