$(document).ready(function() {
	//Burger open, close
		$(".sandwich, .menu_item").click(function() {
		  $(".sandwich").toggleClass("active");
		});


	//show menu click
		$(".header__menu__btn").click(function(){
		    $(".header__menu__nav ul").slideToggle(1500);
		    $(".header__content").slideToggle(1500);
		   
		});
	//Icon clock animate

		$(".clock ").hover(function(){
		    $(".clock img").addClass('animated wobble');
		   
	//Icon pocketbook animate

		});
		$(".pocketbook ").hover(function(){
		    $(".pocketbook img").addClass('animated jello');
		   
	//Icon home animate
	
		});
		$(".home ").hover(function(){
		    $(".home img").addClass('animated swing');
		   
		});


});


