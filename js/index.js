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
	//Slider slick
	$('.shops__content__slider').slick({
    dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
	  });

	$('.foods__slider').slick({
    
	  });
	$('.people__slider').slick({
    	prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="img/arrow-left.png"></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="img/arrow-right.png"></button>',
		
		
	  });

	$('.galery__contentSlider').slick({
    	arrows: false,
    	dots: true

	  });

/*FontAwesomeConfig = { searchPseudoElements: true };*/

/*  $(window).resize(function(){

       if ($(window).width() <= 600) {  

              $('.shops__content__slider').slick({
						    slidesToShow: 1,
						    slidesToScroll: 1
						  });

       }     

});*/

});


