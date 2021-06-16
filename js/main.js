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
	"bag 1.JPG",
	"bag 2.JPG",
	"bag 3.JPG",
	"bag 4.JPG",
	"bag 5.JPG",
	"Block printing 1.jpg",
	"Block printing 10.JPG",
	"Block printing 2.jpg",
	"Block printing 3.jpg",
	"Block printing 4.jpg",
	"Block printing 5.JPG",
	"Block printing 6.JPG",
	"Block printing 7.JPG",
	"Block printing 8.JPG",
	"Block printing 9.JPG",
	"cushion cover 1.JPG",
	"Cushion cover 2.jpg",
	"Cushion Cover 3.JPG",
	"Cushion Cover 4.JPG",
	"Cushion Cover 5.JPG",
	"Cushion Cover 6.JPG",
	"Cushion Cover 7.JPG",
	"Cushion Cover 8.JPG",
	"Cushion Cover 9.JPG",
	"Dhaka 1.jpg",
	"Dhaka 2.jpg",
	"Dhaka 3.jpg",
	"Dhaka 4.jpg",
	"dress 1.JPG",
	"dress 2.JPG",
	"dress 3.JPG",
	"dress 4.JPG",
	"dress 5.JPG",
	"dress 6.JPG",
	"dress 7.JPG",
	"necklace 1.JPG",
	"necklace 2.JPG",
	"necklace 3.JPG",
	"set 1.JPG",
	"set 2.JPG",
	"set 3.JPG",
	"set 4.JPG",
	"set 5.JPG",
	"shoes 1.JPG",
	"shoes 2.JPG",
	"shoes 3.JPG",
	"shoes 4.JPG",
	"wristband.JPG"
];

const names = [
"Bag 1",
"Bag 2",
"Bag 3",
"Bag 4",
"Bag 5",
"Block printing 1",
"Block printing 2",
"Block printing 3",
"Block printing 4",
"Block printing 5",
"Block printing 6",
"Block printing 7",
"Block printing 8",
"Block printing 9",
"Block printing 10",
"Cushion cover 1",
"Cushion cover 2",
"Cushion Cover 3",
"Cushion Cover 4",
"Cushion Cover 5",
"Cushion Cover 6",
"Cushion Cover 7",
"Cushion Cover 8",
"Cushion Cover 9",
"Dhaka 1",
"Dhaka 2",
"Dhaka 3",
"Dhaka 4",
"Dress 1",
"Dress 2",
"Dress 3",
"Dress 4",
"Dress 5",
"Dress 6",
"Dress 7",
"Necklace 1",
"Necklace 2",
"Necklace 3",
"Set 1",
"Set 2",
"Set 3",
"Set 4",
"Set 5",
"Shoes 1",
"Shoes 2",
"Shoes 3",
"Shoes 4",
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
