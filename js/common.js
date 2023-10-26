/**
 * Created by Administrator on 2016-11-17.
 * Design nas.
 */


// JavaScript Document


function overScroll() {
    var bWidth = $(window).width();
    var bHeight = $(window).height();
    var rWidth = 1920 - bWidth;
    var rHeight = 980 - bHeight;
    $('#scrollBox').overscroll({
        scrollLeft: -1920,
        scrollTop: -980,
        captureWheel: false
    });
}
$(window).resize(function () {
    overScroll();
});




$(document).ready(function () {

    $('#scene05 .coach').delay(10000).fadeOut(700);

    //gnb nav event
    $('#gnb .gnb01  > li a').click(function () {
        var posX = $($(this).attr('href')).position().left;
        var posY = $($(this).attr('href')).position().top;
        var scrollL = $('#scrollBox').scrollLeft();
        var scrollT = $('#scrollBox').scrollTop();
        $('#scrollBox').stop().animate({'scrollLeft': posX, 'scrollTop': posY}, 1200, 'easeInOutExpo');
        $('#gnb .gnb01  > li a').removeClass('on');
        $(this).addClass('on');
        return false;
    });

    $('#gnb .sound > div:nth-child(1)').on('click',function(){
        $("#audio").trigger('play');
        $('#gnb .sound > div:nth-child(1)').fadeOut(600);
        $('#gnb .sound > div:nth-child(2)').fadeIn(600);
    });
    $('#gnb .sound > div:nth-child(2)').on('click',function(){
        $("#audio").trigger('pause');
        $('#gnb .sound > div:nth-child(2)').fadeOut(600);
        $('#gnb .sound > div:nth-child(1)').fadeIn(600);
    });



    $('#scrollBox .wrap').addClass('on');
    $('#gnb').addClass('on');


    $('#gnb .banner').on('click', function () {
        $('#pop01').fadeIn(700);
    });

    $('#pop01 .event .close').on('click', function () {
        $('#pop01').fadeOut(700);
    });


    $('#scene01 .stage01').on('click', function () {
        $('#mbs').fadeIn(700);
    });

    $('#mbs .lineup01 .close').on('click', function () {
        $('#mbs').fadeOut(700);
    });

    $('#mbs > .lineup01 > .button01').on('click', function () {
        $('#container > section:nth-child(2)').fadeOut(700);
        $('#container > section:nth-child(1)').fadeIn(700);
        $('#mbs > .lineup01 > .button02').removeClass('on');
        $('#mbs > .lineup01 > .button01').addClass('on');
    });

    $('#mbs > .lineup01 > .button02').on('click', function () {
        $('#container > section:nth-child(1)').fadeOut(700);
        $('#container > section:nth-child(2)').fadeIn(700);
        $('#mbs > .lineup01 > .button01').removeClass('on');
        $('#mbs > .lineup01 > .button02').addClass('on');
    });


    $('#scene03 .stage03').on('click', function () {
        $('#lfg').fadeIn(700);
    });

    $('#lfg .lineup02 .close').on('click', function () {
        $('#lfg').fadeOut(700);
    });

    $('#lfg > .lineup02 > .button01').on('click', function () {
        $('#container2 > section:nth-child(2)').fadeOut(700);
        $('#container2 > section:nth-child(1)').fadeIn(700);
        $('#lfg > .lineup02 > .button02').removeClass('on');
        $('#lfg > .lineup02 > .button01').addClass('on');
    });

    $('#lfg > .lineup02 > .button02').on('click', function () {
        $('#container2 > section:nth-child(1)').fadeOut(700);
        $('#container2 > section:nth-child(2)').fadeIn(700);
        $('#lfg > .lineup02 > .button01').removeClass('on');
        $('#lfg > .lineup02 > .button02').addClass('on');
    });


    $('#scene07 .stage06').on('click', function () {
        $('#cbh').fadeIn(700);
    });

    $('#cbh .lineup03 .close').on('click', function () {
        $('#cbh').fadeOut(700);
    });

    $('#cbh > .lineup03 > .button01').on('click', function () {
        $('#container3 > section:nth-child(2)').fadeOut(700);
        $('#container3 > section:nth-child(1)').fadeIn(700);
        $('#cbh > .lineup03 > .button02').removeClass('on');
        $('#cbh > .lineup03 > .button01').addClass('on');
    });

    $('#cbh > .lineup03 > .button02').on('click', function () {
        $('#container3 > section:nth-child(1)').fadeOut(700);
        $('#container3 > section:nth-child(2)').fadeIn(700);
        $('#cbh > .lineup03 > .button01').removeClass('on');
        $('#cbh > .lineup03 > .button02').addClass('on');
    });






    $('#scene02 .shop').on('click', function () {
        $('#shop').fadeIn(700);
    });

    $('#shop .close').on('click', function () {
        $('#shop').fadeOut(700);
    });


    $('#scene08 .stage05').on('click', function () {
        $('#movie').fadeIn(700);
    });

    $('#movie .contents .close').on('click', function () {
        $('#movie').fadeOut(700);
    });



    $('#scene09 .stage04').on('click', function () {
        $('#info').fadeIn(700);
    });

    $('#info .close').on('click', function () {
        $('#info').fadeOut(700);
    });

    $('#info >  .mini_title > .button01').on('click', function () {
        $('#info_container > div:nth-child(2)').fadeOut(700);
        $('#info_container > div:nth-child(1)').fadeIn(700);
        $('#info > .mini_title > .button02').removeClass('on');
        $('#info >  .mini_title > .button01').addClass('on');
    });

    $('#info >  .mini_title .button02').on('click', function () {
        $('#info_container > div:nth-child(1)').fadeOut(700);
        $('#info_container > div:nth-child(2)').fadeIn(700);
        $('#info >  .mini_title > .button01').removeClass('on');
        $('#info > .mini_title > .button02').addClass('on');
    });










    

});






