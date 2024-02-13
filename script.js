$(document).ready(function() {
    $(window).scroll(function() {
        $('.painting').each(function() {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() -400;
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight() -400;
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                // the element is visible, fade it in
                $(this).css('opacity', '1');
            } else {
                // the element is not visible, fade it out
                $(this).css('opacity', '0');
            }
        });
    });
});