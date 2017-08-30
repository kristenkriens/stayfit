$(function(){

	$('.header__mobile').on('click', function() {
		if($(window).width() < 480) {
			$('.header__nav').slideToggle();
			$(this).toggleClass('header__mobile--open');
		}
	});

	$('.requirements__item').each(function(i) {
		var percentage = $(this).find('.requirements__percentage').text();

		$(this).find('.requirements__bar').css('width', 'calc(' + percentage + ' - 30px)');

		console.log(percentage);
	});

	$('.gym-studio__logos').slick({
		accessibility: true,
	  autoplay: true,
		autoplaySpeed: 2000,
	  infinite: true,
		arrows: false,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 940,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

});
