/* ===================================
--------------------------------------
	Boto | Photography HTML Template
	Version: 1.0
	Copyright By: ColorLib
--------------------------------------
======================================*/

'use strict';

// const baseLink = "img/hero-slider/"
// const links = [
// baseLink+"bag-1.webp",
// baseLink+"Block-printing-1.webp",
// baseLink+"Block-printing-7.webp",
// baseLink+"cushion-cover-1.webp",
// baseLink+"Dhaka-4.webp",
// baseLink+"dress-1.webp",
// baseLink+"necklace-1.webp",
// baseLink+"set-1.webp",
// baseLink+"set-3.webp",
// baseLink+"shoes-1.webp",
// baseLink+"wristband.webp"
// ];

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");


	}
);


  const baseLink = "img/hero-slider/"
	const links = [
	baseLink+"bag-1.webp",
	baseLink+"Block-printing-1.webp",
	baseLink+"Block-printing-7.webp",
	baseLink+"cushion-cover-1.webp",
	baseLink+"Dhaka-4.webp",
	baseLink+"dress-1.webp",
	baseLink+"necklace-1.webp",
	baseLink+"set-1.webp",
	baseLink+"set-3.webp",
	baseLink+"shoes-1.webp",
	baseLink+"wristband.webp"
	];
		for (var i = 0; i < links.length; i++) {
			$('.hero-slider').append('<div class="slide-item">'+
					'<a class="fresco" href='+links[i]+' data-fresco-group="projects">'+
						'<img src='+links[i]+' alt="">'+
					'</a>'+
				'</div>');
				$('.gallery__warp .row').append('<div class="col-lg-3 col-md-4 col-sm-6">'+
					'<a class="gallery__item fresco" href='+links[i]+' data-fresco-group="gallery">'+
						'<img src='+links[i]+' alt="">'+
					'</a>'+
				'</div>');
		}
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








(function($) {



  // FB.api(
  // '/118279788363058/posts',
  // {"access_token": "EAADXZBTQdHlQBAFQs9VDrs1aPNKSBsKXhTBH5s6s54ydVbDpJmVy3VLFU2TyZAXutCwmKveVurofqU2LEzyGoS73QK3Kg9PDaiIH3z33VEKeZBbHOt4DgQyhcUPZA7zVZAIdZCUysemeK0QEv9tCYVtrMQOoqtg7EkcbBBSpMSZAuKejdDjVlcL",
  // "method":'GET',"fields":"full_picture"},
  // function(response) {
  //   console.log(response);
  //   for(var i =0; i < response['data'].length ; i++){
  //     links.push(response['data'][i].full_picture);
  //     for (var i = 0; i < links.length; i++) {
  //       $('.hero-slider').append('<div class="slide-item">'+
  //           '<a class="fresco" href='+links[i]+' data-fresco-group="projects">'+
  //             '<img src='+links[i]+' alt="">'+
  //           '</a>'+
  //         '</div>');
  //         $('.gallery__warp .row').append('<div class="col-lg-3 col-md-4 col-sm-6">'+
  //           '<a class="gallery__item fresco" href='+links[i]+' data-fresco-group="gallery">'+
  //             '<img src='+links[i]+' alt="">'+
  //           '</a>'+
  //         '</div>');
  //     }
  //   }
  //
  // }
  // );


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









	/*-------------------
		Hero Slider
	-------------------*/


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
