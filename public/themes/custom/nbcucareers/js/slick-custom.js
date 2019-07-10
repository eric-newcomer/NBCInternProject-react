(function($) {
    $('.path-frontpage .what_nbcuniversal').slick({
        responsive: [{
            breakpoint: 5000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                focusOnSelect: true,
            }
        }, {
            breakpoint: 1024,
            settings: {
                centerMode: true,
                centerPadding: '70px',
                slidesToShow: 1,
            }
        }, {
            breakpoint: 690,
            settings: {
                centerMode: true,
                centerPadding: '25px',
                slidesToShow: 1,
            }
        }]
    });

    $('.path-culture .slider-testi-for-parent .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-testi-nav-parent .slider-nav'
    });

    $('.path-culture .slider-testi-nav-parent .slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-testi-for-parent .slider-for',
        responsive: [{
            breakpoint: 5000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                focusOnSelect: true,
                centerMode: true,
                centerPadding: 0,
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '100px',
            }
        }, {
            breakpoint: 676,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                centerPadding: '50px',
            }
        }]
    });

    /* $('.path-culture .slider-testi-nav-parent .slider-nav .slick-slide').on('click', function (event) {
    	$('.path-culture .slider-testi-for-parent .slider-for').slick('slickGoTo', $(this).data('slickIndex'));
    }); */

    $('.slider-testi-for-parent').css({
        'height': '0px',
        "overflow": 'hidden'
    });
    setTimeout(function() {
        $('.slider-testi-for-parent').css('display', 'none');
    }, 10);
    $('.slider-testi-for-parent .close-button').css('position', 'static');
    var NavWidth_testi = 0;
    var slicktrackWidth_testi = 0;
    //$(".slider-testi-nav-parent .slider-nav .slick-slide").click(function(e){
    $('.slider-testi-nav-parent .slider-nav').on('click', '.slick-slide', function(e) {
        var currentEvent = e.currentTarget.classList.length;
        var current = $(this);
        $('.slider-testi-for-parent').css('display', '');
        //$('.slider-testi-for-parent .slick-next').trigger('click');
        $('.slider-testi-for-parent .close-button').css('position', 'absolute');
        var dragwidth = $('.slider-testi-for-parent').find('.slick-list').width();
        var calssLenth = $('.slider-testi-for-parent .slick-list').find('.slick-slide').length;
        $('.slider-testi-for-parent .slick-track').css('width', (dragwidth * calssLenth));
        $('.slider-testi-for-parent .slick-list').find('.slick-slide').css('width', dragwidth);
        $('.slider-testi-for-parent .slick-list').find('.slick-slide').each(function(i) {
            $(this).css('left', "-" + (dragwidth * i) + 'px');
        });
        $('.slider-testi-nav-parent').css({
            'height': '0px',
            "overflow": 'hidden',
            'display': 'none'
        });
        $('.slider-testi-for-parent').css({
            'height': 'auto',
            "overflow": 'auto',
            'visibility': 'hidden'
        });
        var video_val = jQuery(".slider-testi-for-parent .slider-for .slick-list .slick-slide.slick-current .brightcove-video-main").find('video').attr('id');
        videojs(video_val).play();
        setTimeout(function() {
            if (currentEvent == 4) {
                //$('.slider-testi-for-parent .slick-prev').trigger('click');
            }
            setTimeout(function() {
                $('.slider-testi-for-parent').css('visibility', 'visible');
            }, 300);
        }, 500);
        if (window.innerWidth >= 768 && window.innerWidth <= 991) {
            $('.path-culture .back_fade').show();
        }
    });
    $(".slider-testi-for-parent .close-button").click(function() {
        showTestinomialdefault();
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.culture_testimonials').length) {
            if ($('.slider-testi-for-parent').height() != 0) {
                showTestinomialdefault();
            }
            if ($("body").hasClass("path-culture")) {
                for (var i = 0; i < Object.keys(videojs.players).length; i++) {
                    videojs(Object.keys(videojs.players)[i]).pause();
                }
            }
        }
    });

    function showTestinomialdefault() {
        $('.slider-testi-for-parent .close-button').css('position', 'static');
        $('.slider-testi-for-parent').css({
            'height': '0px',
            "overflow": 'hidden'
        });
        $('.slider-testi-nav-parent').css({
            'display': 'block',
            'height': 'auto',
            "overflow": 'auto',
            'visibility': 'hidden'
        });
        $('.path-culture .back_fade').hide();
        $('.slider-testi-nav-parent .slick-next').trigger('click');
        setTimeout(function() {
            $('.slider-testi-for-parent').css('display', 'none');
        }, 10);
        setTimeout(function() {
            $('.slider-testi-nav-parent .slick-prev').trigger('click');
            setTimeout(function() {
                $('.slider-testi-nav-parent').css('visibility', 'visible');
            }, 300);
            $('.path-culture').find('.slick-slide .user-image').each(function() {
                $(this).height($(this).width());
                if ($(window).width() > 992) {
                    $('.slick-slide .user-image').height($(this).width() - 60);
                } else if ($(window).width() < 992) {
                    $('.slick-slide .user-image').height($(this).width() - 41);
                }
            });
        }, 500);
    }
    $(".slider-testi-for-parent .close-button").click(function() {
        for (var i = 0; i < Object.keys(videojs.players).length; i++) {
            videojs(Object.keys(videojs.players)[i]).pause();
        }
    });
    $(".slider-testi-for-parent .slick-next.slick-arrow, .slider-testi-for-parent .slick-prev.slick-arrow").click(function() {
        for (var i = 0; i < Object.keys(videojs.players).length; i++) {
            videojs(Object.keys(videojs.players)[i]).pause();
        }
        var video_val = $(".slider-testi-for-parent .slider-for .slick-list .slick-slide.slick-current .brightcove-video-main").find('video').attr('id');
        videojs(video_val).play();
    });
    /*$(window).scroll(function() {
    	for (var i = 0; i < Object.keys(videojs.players).length; i++) {
    	  videojs(Object.keys(videojs.players)[i]).pause();
    	}		
    });*/

    $('.path-culture .slider-for-parent .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav-parent .slider-nav'
    });

    $('.path-culture .slider-nav-parent .slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for-parent .slider-for',
        responsive: [{
            breakpoint: 5000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                focusOnSelect: true,
                centerMode: true,
                centerPadding: 0,
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                focusOnSelect: true,
                centerMode: true,
                centerPadding: 0,
            }
        }, {
            breakpoint: 681,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '80px',
            }
        }, {
            breakpoint: 421,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                centerPadding: '30px',
            }
        }]
    });
    var locationSlickIdx = '';
    $('.path-all-locations .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        accessibility: false,
        adaptiveHeight: true,
        draggable: false,
        swipe: false
        //asNavFor: '.path-all-locations .slider-nav'
    });
    $(window).on('orientationchange', function() {
        setTimeout(function() {
            $('.slick-next.slick-arrow').html(' ');
            $('.slick-prev.slick-arrow').html(' ');
            $('.slick-next.slick-arrow').after('<span class="slick-next slick-arrow carousel-control-next-icon"></span>');
            $('.slick-prev.slick-arrow').before('<span class="slick-prev slick-arrow carousel-control-prev-icon"></span>');
            $('.path-culture').find('.slick-slide .user-image').each(function() {
                var height = $(this).width()
                if ($(window).width() > 992) {
                    $('.slick-slide .user-image').height(height - 60);
                } else if ($(window).width() < 992) {
                    $('.slick-slide .user-image').height(height - 41);
                }
            });
            $('.path-culture').find('.slick-slide .single-slider-main').each(function() {
                $(this).height($(this).width());
            });
        }, 1000);
    });
    $('.path-all-locations .slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        responsive: [{
                breakpoint: 5000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: 0,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerPadding: 0,
                    centerMode: false,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                    asNavFor: '.path-all-locations .slider-for',
                    centerPadding: "28%",
                }
            }, {
                breakpoint: 681,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                    asNavFor: '.path-all-locations .slider-for',
                    centerPadding: "20%",
                }
            },
            {
                breakpoint: 421,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                    asNavFor: '.path-all-locations .slider-for',
                    centerPadding: "18%",
                }
            }
        ]
    });

    $('.path-all-locations .slider-nav .slick-slide').on('click', function(event) {
        $('.path-all-locations .slider-for').slick('slickGoTo', $(this).data('slickIndex'));
        locationSlickIdx = $(this).data('slickIndex');
    });
    $('.path-all-locations .slider-nav.slick-slider').on('click', '.slick-prev', function() {
        var idactive = $('.path-all-locations .slider-for.slick-slider .slick-slide.slick-current.slick-active .slider-title span').text();
        $('.path-all-locations .slider-nav.slick-slider .slick-slide').each(function() {
            if ($.trim($(".single-slider-img .slider-title", this).text()) == idactive) {
                $(".single-slider-img", this).addClass("highlight-slide");
            }
        });
    });

    $('.path-all-locations .slider-nav').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        if ((window.innerWidth >= 768) && (window.innerWidth <= 992)) {
            var idactive = $('.path-all-locations .slider-for.slick-slider .slick-slide.slick-current.slick-active .slider-title span').text();
            $(".single-slider-img").removeClass("highlight-slide");
            $('.path-all-locations .slider-nav.slick-slider .slick-slide').each(function() {
                if ($.trim($(".single-slider-img .slider-title", this).text()) == idactive) {
                    $(".single-slider-img", this).addClass("highlight-slide");
                }
            });
        }
    });
    $('.path-all-locations .slider-nav.slick-slider').on('click', '.slick-next', function() {
        var idactive = $('.path-all-locations .slider-for.slick-slider .slick-slide.slick-current.slick-active .slider-title span').text();
        $('.path-all-locations .slider-nav.slick-slider .slick-slide').each(function() {
            if ($.trim($(".single-slider-img .slider-title", this).text()) == idactive) {
                $(".single-slider-img", this).addClass("highlight-slide");
            }
        });
    });
    $(window).on('orientationchange', function() {
        $('.path-all-locations .slider-nav.slick-slider').on('click', '.slick-slide', function() {
            $('.path-all-locations .slider-for').slick('slickGoTo', $(this).data('slickIndex'));
            locationSlickIdx = $(this).data('slickIndex');
        });
        jQuery('.path-all-locations .slider-nav.slick-slider').on('click', '.slick-slide', function() {
            //jQuery('.path-all-locations .slider-nav .single-slider-img').on('click touchstart',function(){	
            /*jQuery.each(jQuery('.path-all-locations .slider-nav .single-slider-img'), function(index, value) {
            	jQuery(value).removeClass('highlight-slide');
            });*/
            jQuery('.path-all-locations .slider-nav .single-slider-img').removeClass('highlight-slide');
            jQuery(".single-slider-img", this).addClass("highlight-slide");
            //jQuery(this).addClass( "highlight-slide" );
        });
        if (locationSlickIdx != '') {
            var val = parseInt(locationSlickIdx);
            setTimeout(function() {
                if ((window.innerWidth >= 768) && (window.innerWidth <= 992)) {
                    jQuery('.path-all-locations .slider-nav .single-slider-img').removeClass('highlight-slide');
                    jQuery('.path-all-locations .slider-nav .slick-slide').removeClass('slick-current slick-active slick-center');
                    jQuery('.path-all-locations .slider-nav.slick-slider').find('div[data-slick-index=' + val + '] .single-slider-img').addClass('highlight-slide');
                    jQuery('.path-all-locations .slider-nav').slick('slickGoTo', val);
                    jQuery('.path-all-locations .slider-for').slick('slickGoTo', val);
                }
            }, 800);
        }
    });
    $(window).on('resize', function() {
        $('.path-all-locations .slider-nav.slick-slider').on('click', '.slick-slide', function() {
            $('.path-all-locations .slider-for').slick('slickGoTo', $(this).data('slickIndex'));
        });
        jQuery('.path-all-locations .slider-nav.slick-slider').on('click', '.slick-slide', function() {
            //jQuery('.path-all-locations .slider-nav .single-slider-img').on('click touchstart',function(){	
            /*jQuery.each(jQuery('.path-all-locations .slider-nav .single-slider-img'), function(index, value) {
            	jQuery(value).removeClass('highlight-slide');
            });*/
            jQuery('.path-all-locations .slider-nav .single-slider-img').removeClass('highlight-slide');
            jQuery(".single-slider-img", this).addClass("highlight-slide");
            //jQuery(this).addClass( "highlight-slide" );
        });
    });
    if (window.innerWidth >= 768) {
        if (jQuery('.path-all-locations .slider-nav .slick-slide.slick-active').hasClass('slick-current')) {
            jQuery('.path-all-locations .slider-nav .slick-current .single-slider-img').addClass('highlight-slide');
        }
        jQuery('.path-all-locations .slider-nav.slick-slider').on('click', '.slick-slide', function() {
            //jQuery('.path-all-locations .slider-nav .single-slider-img').on('click touchstart',function(){	
            /*jQuery.each(jQuery('.path-all-locations .slider-nav .single-slider-img'), function(index, value) {
            	jQuery(value).removeClass('highlight-slide');
            });*/
            jQuery('.path-all-locations .slider-nav .single-slider-img').removeClass('highlight-slide');
            jQuery(".single-slider-img", this).addClass("highlight-slide");
            //jQuery(this).addClass( "highlight-slide" );
        });

        $('.path-all-locations li.continent-section').hover(function() {
            //$(this).trigger('click');
        });
    }
    $('.slider-for-parent').css({
        'height': '0px',
        "overflow": 'hidden'
    });
    setTimeout(function() {
        $('.slider-for-parent').css('display', 'none');
    }, 100);
    $('.slider-for-parent .close-button').css('position', 'static');
    $('.slick-next.slick-arrow').html(' ');
    $('.slick-prev.slick-arrow').html(' ');
    $('.slick-next.slick-arrow').after('<span class="slick-next slick-arrow carousel-control-next-icon"></span>');
    $('.slick-prev.slick-arrow').before('<span class="slick-prev slick-arrow carousel-control-prev-icon"></span>');
    $(document).on('click', '.carousel-control-next-icon', function() {
        $(this).prev().trigger('click');
    });
    $(document).on('click', '.carousel-control-prev-icon', function() {
        $(this).next().trigger('click');
    });
    var NavWidth = 0;
    var slicktrackWidth = 0;
    //$(".slider-nav-parent .slider-nav .slick-slide").click(function(e){
    $('.slider-nav-parent .slider-nav').on('click', '.slick-slide', function(e) {
        if (window.innerWidth <= 680) {
            window.open($('.slider-nav-parent .slider-nav .slick-current .single-slider-main').attr('data-src'));
        } else {
            $('.slider-for-parent').css('display', '');
            //$('.slider-for-parent .slick-next').trigger('click');
            $('.slider-for-parent .close-button').css('position', 'absolute');
            $('.slider-nav-parent').css({
                'height': '0px',
                "overflow": 'hidden',
                'display': 'none'
            });
            var dragwidth = $('.slider-for-parent').find('.slick-list').width();
            var calssLenth = $('.slider-for-parent .slick-list').find('.slick-slide').length;
            $('.slider-for-parent .slick-track').css('width', (dragwidth * calssLenth));
            $('.slider-for-parent .slick-list').find('.slick-slide').css('width', dragwidth);
            $('.slider-for-parent .slick-list').find('.slick-slide').each(function(i) {
                $(this).css('left', "-" + (dragwidth * i) + 'px');
            });
            $('.slider-for-parent').css({
                'height': 'auto',
                "overflow": 'auto',
                'visibility': 'hidden'
            });
            setTimeout(function() {
                setTimeout(function() {
                    $('.slider-for-parent').css('visibility', 'visible');
                }, 300);
            }, 500);
            if (window.innerWidth >= 768 && window.innerWidth <= 991) {
                $('.path-culture .back_fade').show();
            }
        }
    });
    $(".slider-for-parent .close-button").click(function() {
        showAwardsDefaultSlider();
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.culture_awards_recognition').length) {
            if ($('.slider-for-parent').height() != 0) {
                showAwardsDefaultSlider();
            }
        }
    });

    function showAwardsDefaultSlider() {
        $('.slider-for-parent .close-button').css('position', 'static');
        $('.slider-for-parent').css({
            'height': '0px',
            "overflow": 'hidden'
        });
        $('.slider-nav-parent').css({
            'display': 'block',
            'height': 'auto',
            "overflow": 'auto',
            'visibility': 'hidden'
        });
        $('.path-culture .back_fade').hide();
        $('.slider-nav-parent .slick-next').trigger('click');
        $('.slider-for-parent').css('display', 'none');
        setTimeout(function() {
            $('.slider-nav-parent .slick-prev').trigger('click');
            setTimeout(function() {
                $('.slider-nav-parent').css('visibility', 'visible');
            }, 300)
        }, 500);
    }
})(jQuery);