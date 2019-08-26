;(function($){
    "use strict";

    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll){
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    
    function offcanvasActivator(){
        if ( $('.bar_menu').length ){
            $('.bar_menu').on('click', function(){
                $('#menu').toggleClass('show-menu')
            });
            $('.close_icon').on('click',function(){
                $('#menu').removeClass('show-menu')
            })
        }
    }
    offcanvasActivator();
    
    $('.offcanfas_menu .dropdown').on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
	});
	$('.offcanfas_menu .dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
	});
    
    $(window).on("load",function(){
        if($('.mega_menu_two .scroll').length){
            $(".mega_menu_two .scroll").mCustomScrollbar({
                mouseWheelPixels: 50,
                scrollInertia: 0,
            });
        }
    });
    
    /*--------- WOW js-----------*/
    function wowAnimation(){
        new WOW({
            offset: 100,          
            mobile: true
        }).init()
    }
    wowAnimation()
    
//    var $animation_elements = $('.scroll_animation');
//    var $window = $(window);
//
//    function check_if_in_view() {
//      var window_height = $window.height();
//      var window_top_position = $window.scrollTop();
//      var window_bottom_position = (window_top_position + window_height);
//
//      $.each($animation_elements, function() {
//        var $element = $(this);
//        var element_height = $element.outerHeight();
//        var element_top_position = $element.offset().top;
//        var element_bottom_position = (element_top_position + element_height);
//
//        //check to see if this current container is within viewport
//        if ((element_bottom_position >= window_top_position) &&
//          (element_top_position <= window_bottom_position)) {
//          $element.addClass('in-view');
//        } else {
//          $element.removeClass('in-view');
//        }
//      });
//    }
//    
//    
//    if($(window).width() > 576){
//        $window.on('scroll resize', check_if_in_view);
//        $window.trigger('scroll');
//    }
    
    

    $('.ar_down').on('click', function () {
        var getID = $(this).prev().attr('id');
        var result = document.getElementById(getID);
        var qty = result.value;
        $('.proceed_to_checkout .update-cart').removeAttr('disabled');
        if( !isNaN( qty ) && qty > 0 ) {
            result.value--;
        }else {
            return false;
        }
    });
    
    
    /* ===== Parallax Effect===== */
	function parallaxEffect() {
        if($('.parallax-effect').length){
            $('.parallax-effect').parallax();
        };
	}
    parallaxEffect();
    
    /* Counter Js */
    function counterUp(){
        if ( $('.counter').length ){ 
            $('.counter').counterUp({
                delay: 1,
                time: 500
            });
        };
    };  
    
    counterUp();
    
    /*===== progress-bar =====*/
    function circle_progress(){
        if( $('.circle').length ){
            $(".circle").each(function() {
                $(".circle").appear(function() {
                    $('.circle').circleProgress({
                        startAngle:-14.1,
                        size: 200,
                        duration: 9000,
                        easing: "circleProgressEase",
                        emptyFill: '#f1f1fa ',
                        lineCap: 'round',
                        thickness:10,
                    })
                }, {
                    triggerOnce: true,
                    offset: 'bottom-in-view'
                })
            })
        }
    }
    circle_progress();
    
    /*------------- preloader js --------------*/
   
   
    function loader(){
        $(window).on('load', function() {
            $('#ctn-preloader').addClass('loaded');
            // Una vez haya terminado el preloader aparezca el scroll

            if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(900).queue(function () {
                    $(this).remove();
                });
            }
        });
    }
    loader();
    
    if($('[data-toggle="tooltip"]').length){
        $('[data-toggle="tooltip"]').tooltip()
    }

	$('.close_icon').on('click', function(){
		$('body').removeClass('open');
		return false;
	});
    
//    if($(window).width() > 1199){
//        
//    }
//    
    
//    if($('#multiscroll').length > 0){
//            $('#multiscroll').multiscroll({
//                verticalCentered : true,
//                scrollingSpeed: 1200,
//                easing: 'easeInOutQuint',
//                menu: '#navigation',
//                sectionsColor: [],
//                navigation: true,
//                navigationPosition: 'right',
//                navigationColor: '#fff',
//                navigationTooltips: [],
//                loopBottom: false,
//                loopTop: false,
//                css3: false,
//                paddingTop: 0,
//                paddingBottom: 0,
//                normalScrollElements: null,
//                keyboardScrolling: true,
//                touchSensitivity: 5,
//                responsiveWidth: 1024,
//                afterLoad: function(anchorLink, index){
//                    if(index == '3'){
//                        $(this).find("div.skillbar-bg").each(function() {
//                            $(this).find(".custom-skillbar").delay(200).animate({
//                                width: $(this).attr("data-percent")
//                            }, 1500);
//                        });
//                    }
//                    if(index == '2' || index == '4' || index == '6'){
//                        $('#multiscroll-nav').removeClass('white');
//                        $('.bar_menu span').css("background-color", "#051441");
//                    }
//                    else{
//                        $('#multiscroll-nav').addClass('white');
//                        $('.bar_menu span').css("background-color", "#fff");
//                    }
//                    if(index == '3' || index == '5'){
//                        $('.full_header').removeClass('content-white');
//                    }
//                    else{
//                        $('.full_header').addClass('content-white');
//                    }
//                    new WOW({
//                        offset: 100,          
//                        mobile: true
//                    }).init()
//                }
//
//            });
//            var onMobile = false;
//            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
//                onMobile = true;
//            }
//
//            if ((onMobile === false)) {
//                 $('#multiscroll').multiscroll.destroy();
//            }
//            $('#multiscroll-nav').addClass('white');
//            $('.full_header').addClass('content-white');
//        }
    
//    $('.submenu > a').on('click',function(event){
//        event.preventDefault()
//
//        $(this).parent().find('ul').first().toggle(700);
//
//        $(this).parent().siblings().find('ul').hide(700);
//
//        //Hide menu when clicked outside
////        $(this).parent().find('ul').mouseleave(function(){  
////          var thisUI = $(this);
////          $('html').click(function(){
////            thisUI.hide(700);
////            $('html').unbind('click');
////          });
////        });
//    });
    
     function active_dropdown() {
        if ($(window).width() < 992) {
            $('.menu li.submenu > a').on('click',function(event){
                event.preventDefault()
                $(this).parent().find('ul').first().toggle(700);
                $(this).parent().siblings().find('ul').hide(700);
            });
        }
    }
    active_dropdown();
    
   
    
//    $('.burger_menu').click(function(){
//            $(this).toggleClass('open');
//        });
    
    function hamberger_menu(){
        if ( $('.burger_menu').length ){
            $('.burger_menu').on('click', function(){
                $(this).toggleClass('open')
                $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
            });
//            $('.burger_menu').on('click',function(){
//                $('.burger_menu').removeClass('open')
//            })
            $('.close, .click-capture').on('click', function() {
                $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
//                $('.m_content').slideUp(300);
            });
//            var dropToggle = $('.menu-list > li').has('ul').children('a');
//            dropToggle.on('click', function() {
//                dropToggle.not(this).closest('li').find('ul').slideUp(200);
//                $(this).closest('li').children('ul').slideToggle(200);
//                return false;
//            });


//            $('.bar_menu').on('click', function() {
//                $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
//            });
        }
    }
    hamberger_menu();

})(jQuery)