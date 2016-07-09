$(document).ready(function () {
    $(".panel-title a").click(function () {
        $(this).parents(".panel-default").siblings(".panel-default").find(".panel-title").removeClass("open");
        $(this).parent(".panel-title").toggleClass("open");
    });
    $(".ozy-grid-gallery li a").mouseenter(function () {
        $(this).children("img.transform").css({"transform": "matrix(1, 0, 0, 1, 0, -60)"});
        $(this).children(".info.transform").css({"top": "0", "right": "0"});
    });
    $(".ozy-grid-gallery li a").mouseleave(function () {
        $(this).children("img.transform").css({"transform": "matrix(1, 0, 0, 1, 0, 0)"});
        $(this).children(".info.transform").css({"top": "100%", "right": "0"});
    });
    $('#sidebar ul li.dropdown a').click(function () {
        $(this).parent("li.dropdown").toggleClass("slide-up");
    });
    $(".menu-item-request-rate a").click(function(){
        console.log("show form");
        requestForm();
    })
    $("#company").mouseenter(function(){
        console.log("mouse enter");
        $(this).find(".carousel-control").fadeIn('slow');
    });
    $("#company").mouseleave(function(){
        console.log("mouse leave");
        $(this).find(".carousel-control").fadeOut('slow');
    });
    $("#main-menu .dropdown").hover(function () {
        $(window).width() >= 750 && $(this).toggleClass("open")
    }), $(".search-icon").click(function () {
        $("#top-search").toggleClass("open")
    }), $(window).width() > 767 && $(".item-heading").click(function () {
        $(this).siblings(".item-desc").slideToggle()
    }), $(".menu-item-request-rate").click(function () {
        $("#request-a-rate").slideToggle()
    }), $("#close-btn").click(function () {
        $("#request-a-rate").slideToggle()
    }), $("#close-search").click(function () {
        $("#top-search").toggleClass("open")
    }), $(".menu-btn").click(function () {
        $(this).toggleClass("menu-opened")
    }), $(window).scroll(function () {
        $(this).scrollTop() > 150 ? $("#go-to-top").fadeIn() : $("#go-to-top").fadeOut()
    }), $("#go-to-top").click(function () {
        return $("html, body").animate({scrollTop: 0}, 800), !1
    }), $(".board-tabs a").click(function (o) {
        o.preventDefault(), $(this).tab("show")
    });
    var o = $(window).width();
    $(window).bind("resize", function () {
        location.reload(), 768 > o ? ($("#mytabs").removeClass("navbar"), $("#mytabs").addClass("nav-tabs")) : $("#mytabs").addClass("navbar")
    })
}), $(function () {
    $(".jcarousel").jcarouselAutoscroll()
}), function (o) {
    o(function () {
        var t = o(".jcarousel");
        t.on("jcarousel:reload jcarousel:create", function () {
            var t = o(this), n = t.innerWidth();
            n >= 600 ? n /= 3 : n >= 350 && (n /= 2), t.jcarousel("items").css("width", Math.ceil(n) + "px")
        }).jcarousel({wrap: "circular"}), o(".jcarousel-control-prev").jcarouselControl({target: "-=1"}), o(".jcarousel-control-next").jcarouselControl({target: "+=1"}), o(".jcarousel-pagination").on("jcarouselpagination:active", "a", function () {
            o(this).addClass("active")
        }).on("jcarouselpagination:inactive", "a", function () {
            o(this).removeClass("active")
        }).on("click", function (o) {
            o.preventDefault()
        }).jcarouselPagination({perPage: 1, item: function (o) {
                return'<a href="#' + o + '">' + o + "</a>"
            }})
    })
}(jQuery), function (o) {
    o(function () {
        o(".verticle-slider").jcarousel({vertical: !0, size: 5}), o(".jcarousel-control-prev").on("jcarouselcontrol:active", function () {
            o(this).removeClass("inactive")
        }).on("jcarouselcontrol:inactive", function () {
            o(this).addClass("inactive")
        }).jcarouselControl({target: "-=1"}), o(".jcarousel-control-next").on("jcarouselcontrol:active", function () {
            o(this).removeClass("inactive")
        }).on("jcarouselcontrol:inactive", function () {
            o(this).addClass("inactive")
        }).jcarouselControl({target: "+=1"}), o(".jcarousel-pagination").on("jcarouselpagination:active", "a", function () {
            o(this).addClass("active")
        }).on("jcarouselpagination:inactive", "a", function () {
            o(this).removeClass("active")
        }).jcarouselPagination()
    })
}(jQuery);

function requestForm(){
        console.log("appendform");
             jQuery("#header").append('<div class="request-form"> </div>');
            jQuery("#header .request-form").html('<div id="request-a-rate" class="modal fade" style="top: 0px;" tabindex="-1" role="dialog">' +
                '<div class="modal-dialog" role="document">'+
                    '<div class="modal-content col-xs-12 pd-N">'+
                        '<div class="modal-header bdr-B">'+
                            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                        '</div>'+
                        '<div class="modal-body col-xs-12">'+
                            '<div class="heading-font col-xs-12"><h4>Our reputation for innovative design, backed up with strong delivery on time and on budget, underpins our ability to create long-standing relationships with our clients.</h4>'+
                                '<p>Use the form below to send us all information pertinent to your project.</p>'+
                                '<p>To insure a prompt and accurate rate, please provide us with all the following information:</p>'+
                                '<div lang="en-US" dir="ltr" id="wpcf7-f397-o1" class="wpcf7" role="form"></div>'+
                            '</div>'+
                            '<div class="screen-reader-response"></div>'+
                            '<form novalidate="novalidate" class="col-xs-12" method="post"><p class="col-xs-12"><select aria-invalid="false" aria-required="true" class="form-control" name="menu-297"><option value="">---</option><option value="Planning / Consulting">Planning / Consulting</option><option value="Drafting / Site Prep">Drafting / Site Prep</option><option value="Residential Renovations">Residential Renovations</option><option value="Commercial Renovations">Commercial Renovations</option><option value="New Construction">New Construction</option><option value="Modular Workforce Installation">Modular Workforce Installation</option><option value="I have a questions regarding an invoice / bank details / etc.">I have a questions regarding an invoice / bank details / etc.</option><option value="I would like to apply for a job with us">I would like to apply for a job with us</option><option value="Feedback / suggestions / other">Feedback / suggestions / other</option></select></p><p class="col-xs-12"><select aria-invalid="false" class="form-control" name="menu-610"><option value="Mr.">Mr.</option><option value="Ms.">Ms.</option></select></p><p class="col-xs-12"><input type="text" placeholder="Title" aria-invalid="false" aria-required="true" class="form-control" size="40" value="" name="your-title"></p><p class="col-sm-6 col-xs-12"><input type="text" placeholder="Name (required)" aria-invalid="false" aria-required="true" class="form-control" size="40" value="" name="your-name"></p><p class="col-sm-6 col-xs-12"><input type="text" placeholder="Company" aria-invalid="false" class="form-control" size="40" value="" name="your-company"></p><p class="col-sm-6 col-xs-12"><input type="text" placeholder="Phone (required)" aria-invalid="false" aria-required="true" class="form-control" size="40" value="" name="your-phone"></p><p class="col-sm-6 col-xs-12"><input type="email" placeholder="Email (required)" aria-invalid="false" aria-required="true" class="form-control" size="40" value="" name="your-email"></p><p class="col-sm-6 col-xs-12"><input type="text" placeholder="City (required)" aria-invalid="false" aria-required="true" class="form-control" size="40" value="" name="your-city"></p>                                <p class="col-sm-6 col-xs-12"><input type="text" placeholder="Subject" aria-invalid="false" class="form-control" size="40" value="" name="your-subject"></p><p class="col-sm-6 col-xs-12"><textarea placeholder="Your Message" aria-invalid="false" class="form-control" rows="3" cols="40" name="your-message"></textarea></p><p class="col-sm-12 col-xs-12"><input type="submit" class="btn yellow-btn mT" value="Submit Form"><img class="ajax-loader" src="" alt="Sending ..." style="visibility: hidden;"></p><div class=""></div></form>'+
                        '</div>' + '</div>' + '</div>' + '</div>');
        
        

};