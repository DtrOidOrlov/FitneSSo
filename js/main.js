
// Carousel
$('.carousel').carousel({
    interval: 0
});


// navToggle
let nav = $('#nav');
let navToggle = $('#navToggle');

navToggle.on('click', function (event) {
    event.preventDefault();

    nav.toggleClass('show');
});

$(function () {

    // Fixed heade
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
 
    $(window).on("scroll load resize", function () {
        introH = 1300;
        scrollPos = $(this).scrollTop();
      
        if ( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        // console.log(scrollPos)
    });

    // Smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');            
        $("html, body").animate({
            scrollTop: elementOffset 
        }, 1000);
 
    });
});


// Up arrow
var $up__arrow = $('.up__arrow');
$(window).on('scroll', function() {
    if ($(window).scrollTop() >= 70) {
        $up__arrow.fadeIn();
    } else {
        $up__arrow.fadeOut();
    }
});

// Click Up
$up__arrow.on('click', function() {
    $('html,body').animate({ scrollTop: 0 }, 1100)
});






























