(function ($) {
"use strict";




// Sticky Menu
$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 1) {
     $(".sticky").removeClass("scroll-header");
    }else{
     $(".sticky").addClass("scroll-header");
    }
   });


	// // nice select
	$('.nice_select').niceSelect();

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});




// owlCarousel
$('.single-brand-').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});




//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});






// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fa-solid fa-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();





// Artist team carousel
$('.artist-carousel-active').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 2,
	prevArrow: '<strong class="priv_arrow"> <i class="fa-solid fa-angle-left"></i> </strong>',
	nextArrow: '<strong class="next_arrow"> <i class="fa-solid fa-angle-right"></i> </strong>',
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });


   // brand-active
   $('.brand-active').slick({
	infinite: true,
	dots:false,
	slidesToShow: 5,
	slidesToScroll: 2,
	arrows : false,
	responsive: [
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 576,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	],
  });

//testemonial active
$('.testemonial-active').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows:false,
	prevArrow: '<strong class="priv_arrow"><i class="fas fa-arrow-left"></i></strong>',
	nextArrow: '<strong class="next_arrow"><i class="fas fa-arrow-right"></i></strong>',
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

  


	//for menu active class
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	}); 

// cowndown timer
	nftCountDown();
	// Cowndown JS
	function nftCountDown() {
		// Set the date we're counting down to
	  
		var get_all_counter = document.querySelectorAll('.product-time-coundown');
	
		get_all_counter.forEach(element => {
	
		  if(typeof(element.dataset.date) != "undefined"){
		  
			  var x = setInterval(function() {
	
				  var countDownDate = new Date(element.dataset.date).getTime();
				  // Get today's date and time
				  var now = new Date().getTime();
				  
				  // Find the distance between now and the count down date
				  var distance = countDownDate - now;
				  
				  // Time calculations for days, hours, minutes and seconds
				  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
				  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			   
				  $(element).find('.day').html(days);
				  $(element).find('.hours').html(hours);
				  $(element).find('.second').html(seconds);
				  
			  
			
				}, 1000); // end interval
	
		  } // end validation
		  
			
		});  // end loop
		// Update the count down every 1 second
	  
	
	  };


  
// Get the modal
var modal = document.getElementById("wrapperModal");

// Get the button that opens the modal
var btn = document.getElementById("openPopup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closePopup")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById("wrapperModal");

// Get the button that opens the modal
var btn = document.getElementById("openPopup2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closePopup")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// user deshboard toggle
function userMenuWrapperActive() {
    var element = document.querySelector("#use_deshboad_menu");
    element.classList.toggle("active");
  }



})(jQuery);






// Get the modal
var modal = document.getElementById("wrapperModal");

// Get the button that opens the modal
var btn = document.getElementById("openPopup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closePopup")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById("wrapperModal");

// Get the button that opens the modal
var btn = document.getElementById("openPopup2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closePopup")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// toggle
function userMenuWrapperActive() {
    var element = document.querySelector("#use_deshboad_menu");
    element.classList.toggle("active");
  }

