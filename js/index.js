$(document).ready(function () {

	//Animate scroll to section from menu
	$(".main__wrapper").on("click", ".header__menu__nav a, .header__wrapper--pageDown", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 2000);
	});

	//Burger open, close
	$(".sandwich, .menu_item").click(function () {
		$(".sandwich").toggleClass("active");
	});


	//show menu click
	$(".header__menu__btn").click(function () {
		$(".header__menu__nav ul").slideToggle(1500);
		$(".header__content").slideToggle(1500);

	});
	//Hide Mobile Menu when click
	if (window.matchMedia('(max-width: 970px)').matches) {
		$(".header__menu__nav ul li a").click(function () {
			$(".header__menu__nav ul").slideToggle(1500);
			$(".header__content").slideToggle(1500);
			$(".sandwich").toggleClass("active");

		});
	}

	//Icon clock animate

	$(".clock ").hover(function () {
		$(".clock img").addClass('animated wobble');

		//Icon pocketbook animate

	});
	$(".pocketbook ").hover(function () {
		$(".pocketbook img").addClass('animated jello');

		//Icon home animate

	});
	$(".home ").hover(function () {
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

	// Image popap
	$('.galery__contentSlider__slide__img').magnificPopup({
		items: [
			{
			  src: 'img/foto1.jpg'
			},
			{
			  src: 'img/foto2.jpg'
			},
			{
			  src: 'img/foto3.jpg'
			},
			{
			  src: 'img/foto4.jpg'
			},
			{
			  src: 'img/foto5.jpg'
			},
			{
			  src: 'img/foto6.jpg'
			}
			
		
		  ],
		  gallery: {
			enabled: true
		  },
		  type: 'image' // this is default type
	  
	});
});
