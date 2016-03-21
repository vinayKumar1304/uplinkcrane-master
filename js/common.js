/*!document:common.js
 author: vinay kumay Nishad(v.k.nishad1304@gmail.com)
 descripition: create for uplinkcrane.
 */

$(document).ready(function () {
    $(".dropdown").hover(function () {
        if ($(window).width() >= 750) {
            $(this).toggleClass("open");
        }
    });
    $(".search-icon").click(function () {
        $("#top-search").toggleClass("open");
    });
    if ($(window).width() > 767) {
        $(".item-heading").click(function () {
            $(this).siblings(".item-desc").slideToggle();
        });
    }
    ;
    $(".menu-item-request-rate").click(function () {
        $("#request-a-rate").slideToggle();
    });
    $("#close-btn").click(function () {
        $("#request-a-rate").slideToggle();
    });
    $("#close-search").click(function () {
        $("#top-search").toggleClass("open");
    });
    $(".menu-btn").click(function () {
        $(this).toggleClass("menu-opened");
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#go-to-top').fadeIn();
        } else {
            $('#go-to-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#go-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    $('.board-tabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

//    $("div.bhoechie-tab-menu > div.list-group > a").click(function (e) {
//        e.preventDefault();
//        $(this).siblings('a.active').removeClass("active");
//        $(this).addClass("active");
//        var index = $(this).index();
//        $("div.bhoechie-tab > div.bhoechie-tab-content").removeClass("active");
//        $("div.bhoechie-tab > div.bhoechie-tab-content").eq(index).addClass("active");
//    });

//  //for about us page start  
    var width = $(window).width();
    $(window).bind('resize',function(){
        location.reload();
    if (width < 768) {
        $("#mytabs").removeClass("navbar");
        $("#mytabs").addClass("nav-tabs");
    } else {
        $("#mytabs").addClass("navbar");
    }
    return;
    });
//  //for about us page end  



});




$(function () {
    $('.jcarousel').jcarouselAutoscroll();
});


// for jcarousel js do not remove please start

(function ($) {
    $(function () {
        var jcarousel = $('.jcarousel');

        jcarousel
                .on('jcarousel:reload jcarousel:create', function () {
                    var carousel = $(this),
                            width = carousel.innerWidth();

                    if (width >= 600) {
                        width = width / 3;
                    } else if (width >= 350) {
                        width = width / 2;
                    }

                    carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
                })
                .jcarousel({
                    wrap: 'circular'
                });

        $('.jcarousel-control-prev')
                .jcarouselControl({
                    target: '-=1'
                });

        $('.jcarousel-control-next')
                .jcarouselControl({
                    target: '+=1'
                });

        $('.jcarousel-pagination')
                .on('jcarouselpagination:active', 'a', function () {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function () {
                    $(this).removeClass('active');
                })
                .on('click', function (e) {
                    e.preventDefault();
                })
                .jcarouselPagination({
                    perPage: 1,
                    item: function (page) {
                        return '<a href="#' + page + '">' + page + '</a>';
                    }
                });
    });
})(jQuery);

(function ($) {
    $(function () {
        $('.verticle-slider')
                .jcarousel({
                    vertical: true,
                    size: 5
                });

        $('.jcarousel-control-prev')
                .on('jcarouselcontrol:active', function () {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselcontrol:inactive', function () {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    target: '-=1'
                });

        $('.jcarousel-control-next')
                .on('jcarouselcontrol:active', function () {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselcontrol:inactive', function () {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    target: '+=1'
                });

        $('.jcarousel-pagination')
                .on('jcarouselpagination:active', 'a', function () {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function () {
                    $(this).removeClass('active');
                })
                .jcarouselPagination();
    });
})(jQuery);
