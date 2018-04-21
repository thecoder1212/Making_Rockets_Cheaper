var slide1 = true;
var backslide = false;
var slide2 = false;
var backslide1 = false;
var slide3 = false;
var backslide2 = false;

function animate() {
    $('html').fadeIn(1000)
    $('.start').hide();
    $('.start').fadeIn(3000);
    $('.start2').hide();
    $('.start2').fadeIn(6000);
    $('.next2').hide();
    $('.back1').hide();
    $('.back2').hide();
    $('.start3').hide();
    $('.start3').fadeIn(7000);
    $('.start4').hide();
    $('.start4').fadeIn(12000);
    $('.start5').hide();
    $('.start5').fadeIn(15000);
    $('.start6').hide();
    $('.start6').fadeIn(18000);
    $('.next').hide();
    $('.next').fadeIn(7000);
    $('.next1').hide();
    $('.back').hide();
}
animate();

function slideshow() {
    if (slide1 === true) {
        $('.start3').fadeIn(2000);
        $('#slide2').hide();
        $('#slide3').hide();
        $('#slide4').hide();
        $('.back').hide();
    }
}
slideshow();

$(".next").click(function () {
    slide1 = false;
    if (slide1 === false) {
        $('.start3').fadeOut(500);
        $('#slide2').fadeIn(7000);
        $('.next').fadeOut(500);
        $('.next1').fadeIn(4000);
        $('.back').fadeIn(4000);
    }
});


$(".back").click(function () {
    backslide = true;
    if (backslide = true) {
        $('#slide2').fadeOut(500)
        $('.start3').fadeIn(7000)
        $('.next1').fadeOut(500);
        $('.next').fadeIn(500);
        $('.back').fadeOut(500);
    }
});
slideshow();


$(".next1").click(function () {
    slide2 = true;
    if (slide2 === true) {
        $('#slide2').fadeOut(500);
        $('#slide3').fadeIn(7000);
        $('.next1').fadeOut(500);
        $('.next2').fadeIn(4000);
        $('.back').fadeOut(4000);
        $('.back1').fadeIn(500);
    }
});
$(".back1").click(function () {
    backslide1 = true;
    if (backslide1 = true) {
        $('#slide3').fadeOut(500)
        $('#slide2').fadeIn(7000)
        $('.next2').fadeOut(500);
        $('.next1').fadeIn(500);
        $('.back1').fadeOut(500);
        $('.back').fadeIn(500);
    }
});
$(".next2").click(function () {
    slide3 = true;
    if (slide3 === true) {
        $('#slide3').fadeOut(500);
        $('#slide4').fadeIn(7000);
        $('.next2').fadeOut(500);
        $('.back1').fadeOut(4000);
        $('.back2').fadeIn(500);
    }
});
$(".back2").click(function () {
    backslide2 = true;
    if (backslide2 = true) {
        $('#slide4').fadeOut(500)
        $('#slide3').fadeIn(7000)
        $('.next3').fadeOut(500);
        $('.next2').fadeIn(500);
        $('.back2').fadeOut(500);
        $('.back1').fadeIn(500);
    }
});