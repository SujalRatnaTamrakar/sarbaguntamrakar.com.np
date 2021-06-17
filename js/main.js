/* ===================================
--------------------------------------
	Boto | Photography HTML Template
	Version: 1.0
	Copyright By: ColorLib
--------------------------------------
======================================*/

'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Navigation
	--------------------*/
    $(".nav-switch").on('click', function (e) {
		e.preventDefault();
        $(".slicknav_btn").click();
	});

	$('.nav__menu').slicknav({
		'appendTo' : '.main__menu',
		'openedSymbol': '<i class="fa fa-angle-up"></i>',
		'closedSymbol': '<i class="fa fa-angle-right"></i>'
	});

	/*---------------
		Search
	----------------*/
    $('.search-switch').on('click', function (e) {
		e.preventDefault();
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
	});

	/*-------------------
		Add slider images
	-------------------*/
	const links = [
	"bag 1.webp",
	"Block printing 1.webp",
	"Block printing 7.webp",
	"cushion cover 1.webp",
	"Dhaka 4.webp",
	"dress 1.webp",
	"necklace 1.webp",
	"set 1.webp",
	"set 3.webp",
	"shoes 1.webp",
	"wristband.webp"
];

const names = [
"Bag 1",
"Block printing 1",
"Block printing 2",
"Cushion cover 1",
"Dhaka 1",
"Dress 1",
"Necklace 1",
"Set 1",
"Set 2",
"Shoes 1",
"Wristband"
];

for (var i = 0; i < links.length; i++) {
	$('.hero-slider').append('<div class="slide-item">'+
			'<a class="fresco" href="img/hero-slider/'+links[i]+'" data-fresco-group="projects">'+
				'<img src="img/hero-slider/'+links[i]+'" alt="">'+
			'</a>'+
		'</div>');
}

for (var i = 0; i < links.length; i++) {
	$('.hero-text-slider').append('<div class="text-item">'+
		'<h2>'+names[i]+'</h2>'+
	'</div>');
}

for (var i = 0; i < links.length; i++) {
	$('.gallery__warp .row').append('<div class="col-lg-3 col-md-4 col-sm-6">'+
		'<a class="gallery__item fresco" href="img/hero-slider/'+links[i]+'" data-fresco-group="gallery">'+
			'<img src="img/hero-slider/'+links[i]+'" alt="">'+
		'</a>'+
	'</div>');
}


	/*-------------------
		Hero Slider
	-------------------*/
	$('.hero-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		centerMode: true,
		arrows: false,
		asNavFor: '.hero-text-slider',
		autoplay: true,
		pauseOnHover:false,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	var hero_slider = $('.hero-slider');

	hero_slider.on('wheel', (function(e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickPrev');
		} else {
			$(this).slick('slickNext');
		}
	}));

	hero_slider.on('click', '.slick-slide', function (e) {
		e.preventDefault();
		var index = $(this).data("slick-index");
		if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
			$('.slick-slider').slick('slickGoTo', index);
		}
	});

	$('.hero-text-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		arrows: false,
		asNavFor: '.hero-slider',
	});

	/*-------------------
		Blog Slider
	-------------------*/
	$('.blog__slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		arrows: false,
		centerMode: true,
		centerPadding: '190px',
		slidesToShow: 2,
		autoplay: true,
		pauseOnHover:false,
		responsive: [
			{
				breakpoint: 991,
				settings: {
				centerPadding: '0',
				slidesToShow: 2,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: '0',
				}
			}
		]
	});

	/*-------------------
		Progress Bars
	-------------------*/
	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"></div>');
		}
	});



})(jQuery);
