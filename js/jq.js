//links

$(document).ready(function (){
    $("#homeBtn").click(function (){
        $('html, body').animate({
            scrollTop: $(".about-section").offset().top
        }, 700);
    });
    
    $(".logo").click(function (){
        $('html, body').animate({
            scrollTop: $("#head").offset().top
        }, 700);
    });

    $(".home").click(function (){
        $('html, body').animate({
            scrollTop: $("#head").offset().top
        }, 700);
    });

    $(".abt").click(function (){
        $('html, body').animate({
            scrollTop: $(".about-section").offset().top
        }, 700);
    });

    $(".cls").click(function (){
        $('html, body').animate({
            scrollTop: $(".composition").offset().top
        }, 700);
    });

    $(".memship").click(function (){
        $('html, body').animate({
            scrollTop: $(".membership-section").offset().top
        }, 700);
    });

    $(".cont").click(function (){
        $('html, body').animate({
            scrollTop: $(".contact-section").offset().top
        }, 700);
    });

    $(".contactUs").click(function (){
        $('html, body').animate({
            scrollTop: $(".contact-section").offset().top
        }, 1000);
    });

    $(".btn--card").click(function (){
        $('html, body').animate({
            scrollTop: $(".contact-section").offset().top
        }, 1000);
    });
    
    
}); 



