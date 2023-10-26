/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */
function Logic () {

    // class delay logic event
    $.fn.queueAddClass = function(className) {
        this.queue('fx', function(next) {
            $(this).addClass(className);
            next();
        });
        return this;
    };
    $.fn.queueRemoveClass = function(className) {
        this.queue('fx', function(next) {
            $(this).removeClass(className);
            next();
        });
        return this;
    };
    $.fn.queuetoggleClass = function(className) {
        this.queue('fx', function(next) {
            $(this).toggleClass(className);
            next();
        });
        return this;
    };

    // pop event
    $(".pop_btn").click(function(){
        $(".pop").stop().fadeToggle(500);
        return false; //중요
    });
    $(document).click(function(e){
        if(e.target.className =="pop"){
            return false
        }
        $(".pop").stop().fadeOut(500);
    });

    //hover attr replace event
    $('.hover_img').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('.png','_on.png'));
    });
    $('.hover_img').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('_on.png','.png'));
    });

    //gnb nav event
    $('#gnb .gnb01 > li > a').click(function () {
        var posX = $($(this).attr('href')).position().left;
        var posY = $($(this).attr('href')).position().top;
        var scrollL = $('#scrollBox').scrollLeft();
        var scrollT = $('#scrollBox').scrollTop();
        $('#scrollBox').stop().animate({'scrollLeft': posX, 'scrollTop': posY}, 1200, 'easeInOutExpo');
        $('#gnb .gnb01 > li').removeClass('on');
        $(this).addClass('on');
        return false;
    });

   





}