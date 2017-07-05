//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function() {
    $(".navbar-toggle").on("click", function() {
        $(this).toggleClass("active");
    });
    $(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
        $(".navbar-toggle").removeClass("active");
    });
});
		
$(document).ready(function() {
  $('#play-video').on('click', function(ev) {
    $(".video-container").hide();
    $(".video").show();
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
 
  });
});
