$(document).ready(function() {
    (function(){
        function isMobileWidth() {
            return $('#mobile-indicator').is(':visible');
        };

        function mobileMenuReset() {
            if (isMobileWidth()) {
                $('.n-menu-js').css('right',$('.n-menu-js').outerWidth() * -1);
                $('.n-menu-js').css('top',$('.header').outerHeight());
            }
        };

        $('.one-of input').click(function(){
            $(this).parent().parent().parent().parent().find('.one-of input').prop('checked',false);
            $(this).prop('checked',true);
        });

        function mobileSliderReset($item, $container){
            if (isMobileWidth()) {
                var totalHeight = 0;
                for (var i=0; i<3; i++) {
                    totalHeight += parseInt($item.eq(i).outerHeight(true));
                    $container.height(
                       totalHeight - 1
                    )
                }
            } else {
                $container.css('height','auto');
            }
        };

        function resetContainer() {
            if (!isMobileWidth()) {
                $("#faq .accordion__term").next().css('height','');
            }
        };

        $("#faq .accordion__term").on("click",function(){
            var oldHeight = $('#faq .accordion__term.active + .accordion__designation').outerHeight();
             if (isMobileWidth()) {
                var totalHeight = $('.slick-list').outerHeight();
                if ($(this).hasClass("active")) {
                    $(this).next().css('height','auto');
                    var height = $(this).next().outerHeight(true);
                    $('#faq .content__wrapper.slick-initialized').height(
                        $('#faq .content__wrapper.slick-initialized').outerHeight() - height
                    );
                    $(this).next().css('height','0');
                    $(this).removeClass("active");
                } else {
                    $(this).next().css('height','auto');
                    var height = $(this).next().outerHeight(true);
                    $(this).next().css('height','0');

                    if ($("#faq .accordion__term").hasClass('active')) {
                        $(this).next().css('height','auto');
                        height = $(this).next().outerHeight(true) - oldHeight;
                        $(this).next().css('height','0');
                    }

                    $("#faq .accordion__term").removeClass("active");
                    $(this).addClass("active");
                    if ($('#faq .content__wrapper.slick-initialized').height() <= totalHeight) {
                        $('#faq .content__wrapper.slick-initialized').height(
                            $('#faq .content__wrapper.slick-initialized').outerHeight() + height
                        )
                    }
                }
             } else {
                 if ($(this).hasClass("active")) {
                     $(this).removeClass("active");
                 } else {
                     $("#faq .accordion__term").removeClass("active");
                     $(this).addClass("active");
                 }
             }
        });

        $("#vip .accordion__term").on("click",function(){
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $("#vip .accordion__term").removeClass("active");
                $(this).addClass("active");
            }
        });

        $('.n-burger-js').click(function(){
            if (!$(this).hasClass('n-burger--active')) {
                $(this).addClass('n-burger--active');
                $('.n-menu-js').stop().animate({'right':0},'slow');
            } else {
                $(this).removeClass('n-burger--active');
                $('.n-menu-js').stop().animate({'right':$('.n-menu-js').outerWidth() * -1},'slow');
            }
        });

        $('.n-more-js').click(function(){
            var count = 3;
            var factor = 2;
                return function(){
                    var totalHeight = 0;
                       for (var i=0; i<count*factor; i++) {
                           if (parseInt($('#reviews .list__item').eq(i).outerHeight())) {
                               totalHeight += parseInt($('#reviews .list__item').eq(i).outerHeight());
                           }
                       }
                    $('#reviews .content__wrapper.slick-initialized').animate({'height':totalHeight - 1});
                    factor++;
                }
        }());

        $('.n-more2-js').click(function(){
            var count = 3;
            var factor = 2;
                return function(){
                    var totalHeight = 0;
                       for (var i=0; i<count*factor; i++) {
                           if (parseInt($('#faq .accordion__term').eq(i).outerHeight())) {
                               totalHeight += parseInt($('#faq .accordion__term').eq(i).outerHeight(true));
                           }
                       }
                    $('#faq .content__wrapper.slick-initialized').animate({'height':totalHeight + $('.accordion__term.active + .accordion__designation').outerHeight()});
                    factor++;
                }
        }());

        function openPopOrder() {
            $.magnificPopup.open({
                items: {
                    src: '.n-pop-order'
                },
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',
                closeOnBgClick: false,
                closeBtnInside: true,
                preloader: false,
                closeMarkup: '',
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });
        }

        function openPopResponse() {
            $.magnificPopup.open({
                items: {
                    src: '.n-pop-response'
                },
                type: 'inline',

                fixedContentPos: true,
                fixedBgPos: true,

                overflowY: 'auto',
                closeOnBgClick: false,
                closeBtnInside: true,
                preloader: false,
                closeMarkup: '',
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom',
                callbacks: {
                    open: function() {
                      $('.mfp-content').css('height','100%');
                    }
                  }
            });
        }

        function popUp() {
            if (!isMobileWidth()) {

                $('.n-pop-close').click(function(){
                   $.magnificPopup.close();
                });

                $('.btn_block').on('click', openPopOrder);
            } else {
                $('.btn_block').off();
                $('.btn_block').click(function(e){
                    e.preventDefault();
                    if (!$('.n-pop-order').hasClass('n-pop-order--active')) {
                        $('.page').css('height',$('.n-pop-order__container').outerHeight() + 120);
                        $('.n-pop-order').addClass('n-pop-order--active');
                    } else {
                       $('.page').css('height','auto');
                        $('.n-pop-order').removeClass('n-pop-order--active');
                    }

                })
            }
        }

        $('.n-pop-order__reverse').click(function(){
            $('.n-pop-order').removeClass('n-pop-order--active');
            $(this).parent().removeClass('active2');
            $('.feedback__form_order').removeClass('active');
            $('.feedback__form_order').removeClass('active2');
            $('.page').css('height','auto');
        });

        function feedback() {
            if (isMobileWidth()) {
                $('.feedback__form_order').removeClass('active');
            }
        };

        $('.n-order').click(function(){
            if (!$('.feedback__form_order').hasClass('n-pop-order--active')) {
                $('.page').css('height',$('.feedback__form_order').find('form').outerHeight() + 350);
                $('.feedback__form_order').css('height','100%');
            } else {
                $('.page').css('height','auto');
            }
            $('.feedback__links-item_order').toggleClass('active');
            $('.feedback__form_order').toggleClass('active');
            $('.feedback__form_order').toggleClass('active2');
        });

        $('.n-phone').click(function(){
            if (!$('.feedback__form_call').hasClass('feedback__form_call--active')) {
                $('.page').css('height',$('.feedback__form_call').find('form').outerHeight() + 350);
                $('.feedback__form_call').css('height','100%');
            } else {
                $('.page').css('height','auto');
            }
            $('.feedback__form_call').toggleClass('feedback__form_call--active');
        });

        $('.feedback__form-close').click(function(){
            $('.feedback__form_call').removeClass('feedback__form_call--active');
            $('.page').css('height','auto');
        });

        $('.slick-list .list__item').click(function(){
            if (isMobileWidth()) {
                openPopResponse();
            }
        });

        $('.n-pop-response__close').click(function(){
            $.magnificPopup.close();
        })


        function initialize() {
            var mapOptions = {
                draggable: false,
                scrollwheel: false,
                zoom: 15,
                center: new google.maps.LatLng(55.730881486716, 37.641938924789),
                styles:[{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},
                    {"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},
                    {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},
                    {"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},
                    {"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},
                    {"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},
                    {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},
                    {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},
                    {"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
             };
             var map = new google.maps.Map(document.getElementsByClassName('map')[0],mapOptions);
             var image = 'components/icons/mark.png';
             var myLatLng = new google.maps.LatLng(55.730881486716, 37.641938924789);
             var pos = new google.maps.LatLng(55.730881486716, 37.641938924789);
             var beachMarker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image
             });

             var myOptions = {
                disableAutoPan: false
                ,maxWidth: 0
                ,pixelOffset: new google.maps.Size(-170, -80)
                ,zIndex: null
                ,boxStyle: {
                  background: "#fdfcf8 no-repeat"
                  ,boxShadow: '0'
                  ,borderRadius:'0px'
                  ,width: "252px"
                 }
                  ,closeBoxMargin: "10px 2px 2px 2px"
                  ,closeBoxURL: ""
                  ,infoBoxClearance: new google.maps.Size(1, 1)
                  ,isHidden: false
                  ,pane: "floatPane"
                  ,enableEventPropagation: false
              };
        };

        initialize();

        $('.slick-slider').height();
        mobileMenuReset();
        popUp();
        feedback();

        $(window).on("load",function(){mobileSliderReset($('#reviews .list__item'),$('#reviews .content__wrapper.slick-initialized'))});
        $(window).on("load",function(){mobileSliderReset($('#faq .accordion__term'),$('#faq .content__wrapper.slick-initialized'))});
        $(window).on('resize',mobileMenuReset);
        $(window).on("resize",function(){mobileSliderReset($('#faq .accordion__term'),$('#faq .content__wrapper.slick-initialized'))});
        $(window).on("resize",function(){mobileSliderReset($('#reviews .list__item'),$('#reviews .content__wrapper.slick-initialized'))});
        $(window).on("resize",resetContainer);
        $(window).on("resize",popUp);
        //$(window).on("resize",feedback);
    })();
});