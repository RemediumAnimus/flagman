jQuery(document).ready(function(e) {
    function a(a, l) {
        "desktop" == a && l ? ("on" == y ? (s(), e(window).on("DOMMouseScroll mousewheel", i)) : (t(), e(window).on("scroll", t)), D.on("click", c), C.on("click", n), e(document).on("keydown", function(a) {
            "40" != a.which || C.hasClass("inactive") ? "38" == a.which && (!D.hasClass("inactive") || D.hasClass("inactive") && e(window).scrollTop() != g.eq(0).offset().top) && (a.preventDefault(), c()) : (a.preventDefault(), n())
        }), d()) : "mobile" == a && (u(), e(window).off("DOMMouseScroll mousewheel", i), e(window).off("scroll", t), D.off("click", c), C.off("click", n), e(document).off("keydown"))
    }

    function t() {
        window.requestAnimationFrame ? window.requestAnimationFrame(l) : l()
    }

    function l() {
        var a = e(window).scrollTop(),
            t = e(window).height();
        e(window).width();
        g.each(function() {
            var l = e(this),
                s = a - l.offset().top,
                i = m(s, t, h);
            o(l.children("div"), i[0], i[1], i[2], i[3], i[4]), s >= 0 && t > s ? l.addClass("visible") : l.removeClass("visible")
        }), d()
    }

    function o(e, a, t, l, o, s) {
        e.velocity({
            translateY: a + "vh",
            scale: t,
            rotateX: l,
            opacity: o,
            boxShadowBlur: s + "px",
            translateZ: 0
        }, 0)
    }

    function s() {
        var e = g.filter(".visible"),
            a = e.prevAll(".cd-section"),
            t = e.nextAll(".cd-section"),
            l = p(h, !1),
            o = l[0],
            s = l[1],
            i = l[2];
        e.children("div").velocity(o, 1, function() {
            e.css("opacity", 1), a.css("opacity", 1), t.css("opacity", 1)
        }), a.children("div").velocity(s, 0), t.children("div").velocity(i, 0)
    }

    function i(e) {
        return e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? (b--, Math.abs(b) >= w && c(), console.log()) : (b++, b >= w && n()), !1
    }
          function hide_order_form () {
        setTimeout(function() {
            var a = (e(".feedback__form_order"), e("#promo"));
            a.hasClass("visible") ? (e(".feedback__form_order").addClass("active"), e(".feedback__links-item").addClass("active")) : (e(".feedback__form").removeClass("active"), e(".feedback__links-item").removeClass("active"))
        }, 400)
    }

    function c(a) {
        "undefined" != typeof a && a.preventDefault();
        var l = g.filter(".visible"),
            o = "off" == y && e(window).scrollTop() != l.offset().top ? !0 : !1;
        l = o ? l.next(".cd-section") : l;
        var s = p(h, o, "prev");
        r(l.prev(".cd-section"), s[3]), k || l.is(":first-child") || (k = !0, l.removeClass("visible").children("div").velocity(s[2], s[3], s[4]).end().prev(".cd-section").addClass("visible").children("div").velocity(s[0], s[3], s[4], function() {
            k = !1, "off" == y && e(window).on("scroll", t)
        }), $ -= 1), f()
    }

    function n(a) {
        "undefined" != typeof a && a.preventDefault();
        var l = g.filter(".visible"),
            o = "off" == y && e(window).scrollTop() != l.offset().top ? !0 : !1,
            s = p(h, o, "next");
        r(l.next(".cd-section"), s[3]), k || l.is(":last-of-type") || (k = !0, l.removeClass("visible").children("div").velocity(s[1], s[3], s[4]).end().next(".cd-section").addClass("visible").children("div").velocity(s[0], s[3], s[4], function() {
            k = !1, "off" == y && e(window).on("scroll", t)
        }), $ += 1), f()
    }

    function r(a, l) {
        "off" == y && (e(window).off("scroll", t), "catch" == h ? e("body, html").scrollTop(a.offset().top) : a.velocity("scroll", {
            duration: l
        }))
    }

    function f() {
        b = 0, d()
    }

    function d() {
        g.filter(".visible").is(":first-of-type") ? D.addClass("inactive") : D.removeClass("inactive"), g.filter(".visible").is(":last-of-type") ? C.addClass("inactive") : C.removeClass("inactive")
    }

    function u() {
        g.children("div").each(function() {
            e(this).attr("style", "")
        })
    }

    function v() {
        return window.getComputedStyle(document.querySelector("body"), "::before").getPropertyValue("content").replace(/"/g, "").replace(/'/g, "")
    }

    function p(e, a, t) {
        var l = "translateNone",
            o = "translateUp",
            s = "translateDown",
            i = "ease",
            c = 800;
        switch (e) {
            case "scaleDown":
                o = "scaleDown", i = "easeInCubic";
                break;
            case "rotate":
                "off" == y ? (o = "rotation.scroll", s = "translateNone") : (o = "rotation", i = "easeInCubic");
                break;
            case "gallery":
                c = 1500, a ? (o = "scaleDown.moveUp.scroll", l = "scaleUp.moveUp.scroll", s = "scaleDown.moveDown.scroll") : (l = "next" == t ? "scaleUp.moveUp" : "scaleUp.moveDown", o = "scaleDown.moveUp", s = "scaleDown.moveDown");
                break;
            case "catch":
                l = "translateUp.delay";
                break;
            case "opacity":
                c = 700, o = "hide.scaleUp", s = "hide.scaleDown";
                break;
            case "fixed":
                o = "translateNone", i = "easeInCubic";
                break;
            case "parallax":
                o = "translateUp.half", i = "easeInCubic"
        }
        hide_order_form ();
        return [l, o, s, c, i]
    }

    function m(e, a, t) {
        var l = 1,
            o = 100,
            s = "0deg",
            i = 1,
            c = 0;
        if (e >= -a && 0 >= e) switch (o = 100 * -e / a, t) {
            case "scaleDown":
                l = 1, i = 1;
                break;
            case "rotate":
                o = 0;
                break;
            case "gallery":
                e >= -a && -.9 * a > e ? (l = -e / a, o = 100 * -e / a, c = 400 * (1 + e / a)) : e >= -.9 * a && -.1 * a > e ? (l = .9, o = -1.125 * (e + .1 * a) * 100 / a, c = 40) : (l = 1 + e / a, o = 0, c = -400 * e / a);
                break;
            case "catch":
                e >= -a && -.75 * a > e ? (o = 100, c = 160 * (1 + e / a)) : (o = -(10 / 7.5) * e * 100 / a, c = -160 * e / (3 * a));
                break;
            case "opacity":
                o = 0, l = .2 * (e + 5 * a) / a, i = (e + a) / a
        } else if (e > 0 && a >= e) switch (o = 100 * -e / a, t) {
                case "scaleDown":
                    l = (1 - .3 * e / a).toFixed(5), i = (1 - e / a).toFixed(5), o = 0, c = 40 * (e / a);
                    break;
                case "rotate":
                    i = (1 - e / a).toFixed(5), s = 90 * e / a + "deg", o = 0;
                    break;
                case "gallery":
                    e >= 0 && .1 * a > e ? (l = (a - e) / a, o = 100 * -(e / a), c = 400 * e / a) : e >= .1 * a && .9 * a > e ? (l = .9, o = -1.125 * (e - .1 * a / 9) * 100 / a, c = 40) : (l = e / a, o = -100, c = 400 * (1 - e / a));
                    break;
                case "catch":
                    c = e >= 0 && a / 2 > e ? 80 * e / a : 80 * (1 - e / a);
                    break;
                case "opacity":
                    o = 0, l = .2 * (e + 5 * a) / a, i = (a - e) / a;
                    break;
                case "fixed":
                    o = 0;
                    break;
                case "parallax":
                    o = 50 * -e / a
            } else if (-a > e) switch (o = 100, t) {
                case "scaleDown":
                    l = 1, i = 1;
                    break;
                case "gallery":
                    l = 1;
                    break;
                case "opacity":
                    o = 0, l = .8, i = 0
            } else switch (o = -100, t) {
                case "scaleDown":
                    l = 0, i = .7, o = 0;
                    break;
                case "rotate":
                    o = 0, s = "90deg";
                    break;
                case "gallery":
                    l = 1;
                    break;
                case "opacity":
                    o = 0, l = 1.2, i = 0;
                    break;
                case "fixed":
                    o = 0;
                    break;
                case "parallax":
                    o = -50
            }
            return [o, l, s, i, c]
    }
    var y = e("body").data("hijacking"),
        h = e("body").data("animation"),
        b = 0,
        w = 5,
        $ = 1,
        k = !1,
        g = e(".cd-section"),
        _ = e(".cd-vertical-nav"),
        D = _.find("a.cd-prev"),
        C = _.find("a.cd-next"),
        x = v(),
        T = !1;
    a(x, !0), e(window).on("resize", function() {
        x = v(), a(x, T), "mobile" == x && (T = !0), "desktop" == x && (T = !1)
    })
});
if($.Velocity){
$.Velocity.RegisterEffect("translateUp", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "-100%"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("translateDown", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "100%"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("translateNone", {
    defaultDuration: 1.5,
    calls: [
        [{
            translateY: "0",
            opacity: "1",
            scale: "1",
            rotateX: "0",
            boxShadowBlur: "0"
        }, 1.5]
    ]
}), $.Velocity.RegisterEffect("scaleDown", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: "0",
            scale: "0.7",
            boxShadowBlur: "40px"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("rotation", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: "0",
            rotateX: "90",
            translateY: "-100%"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("rotation.scroll", {
    defaultDuration: 1.5,
    calls: [
        [{
            opacity: "0",
            rotateX: "90",
            translateY: "0"
        }, 1.5]
    ]
}), $.Velocity.RegisterEffect("scaleDown.moveUp", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "-10%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .2],
        [{
            translateY: "-100%"
        }, .6],
        [{
            translateY: "-100%",
            scale: "1",
            boxShadowBlur: "0"
        }, .2]
    ]
}), $.Velocity.RegisterEffect("scaleDown.moveUp.scroll", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "-100%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .6],
        [{
            translateY: "-100%",
            scale: "1",
            boxShadowBlur: "0"
        }, .4]
    ]
}), $.Velocity.RegisterEffect("scaleUp.moveUp", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "90%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .2],
        [{
            translateY: "0%"
        }, .6],
        [{
            translateY: "0%",
            scale: "1",
            boxShadowBlur: "0"
        }, .2]
    ]
}), $.Velocity.RegisterEffect("scaleUp.moveUp.scroll", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "0%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .6],
        [{
            translateY: "0%",
            scale: "1",
            boxShadowBlur: "0"
        }, .4]
    ]
}), $.Velocity.RegisterEffect("scaleDown.moveDown", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "10%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .2],
        [{
            translateY: "100%"
        }, .6],
        [{
            translateY: "100%",
            scale: "1",
            boxShadowBlur: "0"
        }, .2]
    ]
}), $.Velocity.RegisterEffect("scaleDown.moveDown.scroll", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "100%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .6],
        [{
            translateY: "100%",
            scale: "1",
            boxShadowBlur: "0"
        }, .4]
    ]
}), $.Velocity.RegisterEffect("scaleUp.moveDown", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "-90%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .2],
        [{
            translateY: "0%"
        }, .6],
        [{
            translateY: "0%",
            scale: "1",
            boxShadowBlur: "0"
        }, .2]
    ]
}), $.Velocity.RegisterEffect("translateUp.delay", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "0%"
        }, .8, {
            delay: 100
        }]
    ]
}), $.Velocity.RegisterEffect("hide.scaleUp", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: "0",
            scale: "1.2"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("hide.scaleDown", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: "0",
            scale: "0.8"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("translateUp.half", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "-50%"
        }, 1]
    ]

})
};
$(document).ready(function() {
    function e() {
			var mlat = $('#maplat').val();
			var mlon = $('#maplon').val();
			mlat = mlat*1;
			mlon = mlon*1;
        var e = {
                draggable: false,
                scrollwheel: false,
                zoom: 15,
                zoomControlOptions: {
                     position: google.maps.ControlPosition.LEFT_CENTER
                    },

                center: new google.maps.LatLng(mlat, mlon),
                styles:[{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]

            },
            a = document.getElementById("map"),
            t = new google.maps.Map(a, e);
        new google.maps.Marker({
            position: new google.maps.LatLng(mlat, mlon),
            map: t,
            title: "Dubai",
        })
    }
    $(function() {
        var e = $(".form__group_stick"),
            a = e.find("input"),
            t = e.find(".btn"),
            l = e.find(".file_tooltip");
        a.focus(function() {
            e.addClass("focus")
        }).blur(function() {
            e.removeClass("focus")
        });
        var o = window.File && window.FileReader && window.FileList && window.Blob ? !0 : !1;
        a.change(function() {
            var e;
            e = o && a[0].files[0] ? a[0].files[0].name : a.val().replace("C:\\fakepath\\", ""), e.length && (l.is(":visible") ? (l.text(e), t.text("выбрано")) : l.text(e))
        }).change()
    }), $(window).resize(function() {
        $(".form__group_stick input").triggerHandler("change")
    }), $(".feedback__links-item_call object").on("click", function(e) {
        e.preventDefault(), console.log("Smth")
    }), $(".feedback__links-item_call").on("click", function(e) {
        e.preventDefault(), $(this).hasClass("active") ? ($(this).removeClass("active"), $(".feedback__links-item_call").removeClass("active"), $('.feedback__form_call').removeClass('active')) : ($(".feedback__links-item").removeClass("active"), $(".feedback__form").removeClass("active"), $(this).addClass("active"), $(".feedback__form_call").addClass("active"))
    }), $(".feedback__links-item_order").on("click", function(e) {
        e.preventDefault(), $(this).hasClass("active") ? ($(this).removeClass("active"), $(".feedback__form_order").removeClass("active")) : ($(".feedback__links-item").removeClass("active"), $(".feedback__form").removeClass("active"), $(this).addClass("active"), $(".feedback__form_order").addClass("active"))
    }), $(".feedback__form-close").on("click", function(e) {
        e.preventDefault(), $(".feedback__form").removeClass("active"), $(".feedback__links-item").removeClass("active")
    }), $(".accordion__term").on("click", function() {
        /*$(this).hasClass("active") ? $(this).removeClass("active") : ($(".accordion__term").removeClass("active"), $(this).addClass("active"))*/
    });//, google.maps.event.addDomListener(window, "load", e);
    var a, t = $(".header"),
        l = t.outerHeight() - 80,
        o = $(".main-navigation__list"),
        s = o.find("a"),
        i = $(".ancr"),
        c = s.map(function() {
            var e = $($(this).attr("href"));
            return e.length ? e : void 0
        });

    s.click(function(e) {
        $(".overlay").css({
            opacity: 1,
            "z-index": "100"
        });
        var a = $(this).attr("href"),
            t = "#" === a ? 0 : $(a).offset().top - l;
        $("html, body").stop().delay(300).animate({
            scrollTop: t
        }, 0), e.preventDefault(), setTimeout(function() {
            $(".overlay").css({
                opacity: 0
            })
        }, 600), setTimeout(function() {
            $(".overlay").css({
                "z-index": "-100"
            })
        }, 1e3)
    }), i.click(function(e) {
        $(".overlay").css({
            opacity: 1,
            "z-index": "100"
        });
        var a = $(this).attr("href"),
            t = "#" === a ? 0 : $(a).offset().top - l;
        $("html, body").stop().delay(300).animate({
            scrollTop: t
        }, 0), e.preventDefault(), setTimeout(function() {
            $(".overlay").css({
                opacity: 0
            })
        }, 600), setTimeout(function() {
            $(".overlay").css({
                "z-index": "-100"
            })

        }, 1e3)
    }), $(window).scroll(function() {
        var e = $(this).scrollTop() + l,
            t = c.map(function() {
                return $(this).offset().top < e ? this : void 0
            });
        $(this).scrollTop() > 900 && ($(".feedback__form_order").removeClass("active"), $(".feedback__links-item_order").removeClass("active")), t = t[t.length - 1];
        var o = t && t.length ? t[0].id : "";
        a !== o && (a = o)
    }), jQuery(function(e) {
        e(".telephone").mask("(999) 999-9999")
    }), $(".modal-link").magnificPopup({
        type: "inline",
        midClick: !0,
        removalDelay: 300,
        mainClass: "mfp-fade",
        closeMarkup: '<button title="%title%" type="button" class="mfp-close modal__close"></button>'
    }), $(".main-navigation__item a").on("click", function(e) {
        e.preventDefault();
        var a = $(this).attr("href");
        setTimeout(function() {
            $(".cd-section").removeClass("visible"), $(".cd-section > div").css({
                transform: "translateY(100%)"
            }), $(a).addClass("visible"), $(a).children("div").velocity("translateNone", 1, function() {
                $(a).css("opacity", 1), $(a).prev(".cd-section").css("opacity", 1), $(a).next(".cd-section").css("opacity", 1)
            })
        }, 250)
    }), $(".ancr").on("click", function(e) {
        e.preventDefault();
        var a = $(this).attr("href");
        setTimeout(function() {
            $(".cd-section").removeClass("visible"), $(".cd-section > div").css({
                transform: "translateY(100%)"
            }), $(a).addClass("visible"), $(a).children("div").velocity("translateNone", 1, function() {
                $(a).css("opacity", 1), $(a).prev(".cd-section").css("opacity", 1), $(a).next(".cd-section").css("opacity", 1)
            })
        }, 250)
    }),

     $(".getvisa").submit(function(e) {
        e.preventDefault();
        var a = new FormData($(".getvisa")[0]),
            t = $.ajax({
                type: "POST",
                processData: !1,
                contentType: !1,
                url: "/ajax/reviews.php",
                data: a
            });
        t.done(function(data, textStatus, jqXHR) {
//        	alert(data);
	         if(data != '' && data != undefined)
	         {
	         	window.location.href = '/payment/?ORDER_ID='+data;
	         }
        }), t.fail(function(jqXHR, textStatus, errorThrown) {
            $.magnificPopup.open({
                items: {
                    src: '<div class="modal modal_small modal_error"><p>Ошибка отправки</p></div>'
                }
            })
        })
	}),

     $(".form").submit(function(e) {
     	if($(this).hasClass('getvisa'))
     		return false;
        e.preventDefault();
        var a = new FormData($(".form")[0]),
            t = $.ajax({
                type: "POST",
                processData: !1,
                contentType: !1,
                url: "/ajax/reviews.php",
                data: a
            });
        t.done(function(data) {
        	alert(data);
        	if(data == 'Y')
        	{
	            $.magnificPopup.open({
    	            items: {
        	            src: '<div class="modal modal_small modal_success"><p class="modal__title">Заявка отправлена</p><p>Наш менеджер свяжется с вами в ближайшее время</p></div>'
            	    }
	            })
	         }
	         else if(data != '' && data != undefined)
	         {
//	         	window.location.href = '/payment/?ORDER_ID='+data;
	         }
        }), t.fail(function() {
            $.magnificPopup.open({
                items: {
                    src: '<div class="modal modal_small modal_error"><p>Ошибка отправки</p></div>'
                }
            })
        })
    }), $("a.photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        },
        removalDelay: 300,
        mainClass: "mfp-fade photo-gallery",
        closeMarkup: '<button title="%title%" type="button" class="mfp-close modal-close"></button>',
        callbacks: {
            buildControls: function() {
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight))
            }
        }
    })

      $('.content__wrapper').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

            $('.js-form-close').on('click', function(e) {
            e.preventDefault();
            setTimeout(function(){
            $('.feedback__form').removeClass('active');
            $('.feedback__links-item').removeClass('active');
        }, 300);
        });

});
