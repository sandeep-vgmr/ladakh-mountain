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
        offset:0
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
});
