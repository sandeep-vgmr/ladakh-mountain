// Preloader
$(window).on('load', function () {
    if ($('.lds-ring').length) {
        $('.lds-ring').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});
$(document).ready(function () {
    var width = $(window).width();

    AOS.init({
        delay: 50,
        duration: 800,
        once: true,
        offset: 0
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 110) {
            $('header').addClass('fixedHeader');
        } else {
            $('header').removeClass('fixedHeader');
        }
    });
    $(".navbar-toggler").click(function () {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // mobile form funtionality 
    $('.headingForm').click(function () {
        $('.mobile-form').toggleClass("openUp");
        $('.downArrow').toggleClass("rotateArrow");
    });

    // onclick video play and pause functionality 
    // const video = document.getElementById("video");
    // const circlePlayButton = document.getElementById("play-button");

    // function togglePlay() {
    //     if (video.paused || video.ended) {
    //         video.play();
    //     } else {
    //         video.pause();
    //     }
    // }

    // circlePlayButton.addEventListener("click", togglePlay);
    // video.addEventListener("playing", function () {
    //     circlePlayButton.style.opacity = 0;
    // });
    // video.addEventListener("pause", function () {
    //     circlePlayButton.style.opacity = 1;
    // });


    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
                enabled:true
            },
    
      zoom: {
        enabled: true, 
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
    
        opener: function(openerElement) {
    
          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
    
    });
});
