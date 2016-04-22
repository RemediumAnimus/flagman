var PageTransitions=function(){function e(){g.each(function(){var e=$(this);e.data("originalClassList",e.attr("class"))}),g.eq(m).addClass("pt-page-current"),$("#dl-menu").dlmenu({animationClasses:{"in":"dl-animate-in-2",out:"dl-animate-out-2"},onLinkClick:function(e,a){a.preventDefault(),t(e.data("animation"))}}),r.on("click",function(){return i?!1:(n>67&&(n=1),t(n),void++n)})}function t(e){var t=e.animation?e.animation:e;if(i)return!1;i=!0;var p=g.eq(m);e.showPage?m=e.showPage<s-1?e.showPage:0:s-1>m?++m:m=0;var o=g.eq(m).addClass("pt-page-current"),r="",n="";switch(t){case 1:r="pt-page-moveToLeft",n="pt-page-moveFromRight";break;case 2:r="pt-page-moveToRight",n="pt-page-moveFromLeft";break;case 3:r="pt-page-moveToTop",n="pt-page-moveFromBottom";break;case 4:r="pt-page-moveToBottom",n="pt-page-moveFromTop";break;case 5:r="pt-page-fade",n="pt-page-moveFromRight pt-page-ontop";break;case 6:r="pt-page-fade",n="pt-page-moveFromLeft pt-page-ontop";break;case 7:r="pt-page-fade",n="pt-page-moveFromBottom pt-page-ontop";break;case 8:r="pt-page-fade",n="pt-page-moveFromTop pt-page-ontop";break;case 9:r="pt-page-moveToLeftFade",n="pt-page-moveFromRightFade";break;case 10:r="pt-page-moveToRightFade",n="pt-page-moveFromLeftFade";break;case 11:r="pt-page-moveToTopFade",n="pt-page-moveFromBottomFade";break;case 12:r="pt-page-moveToBottomFade",n="pt-page-moveFromTopFade";break;case 13:r="pt-page-moveToLeftEasing pt-page-ontop",n="pt-page-moveFromRight";break;case 14:r="pt-page-moveToRightEasing pt-page-ontop",n="pt-page-moveFromLeft";break;case 15:r="pt-page-moveToTopEasing pt-page-ontop",n="pt-page-moveFromBottom";break;case 16:r="pt-page-moveToBottomEasing pt-page-ontop",n="pt-page-moveFromTop";break;case 17:r="pt-page-scaleDown",n="pt-page-moveFromRight pt-page-ontop";break;case 18:r="pt-page-scaleDown",n="pt-page-moveFromLeft pt-page-ontop";break;case 19:r="pt-page-scaleDown",n="pt-page-moveFromBottom pt-page-ontop";break;case 20:r="pt-page-scaleDown",n="pt-page-moveFromTop pt-page-ontop";break;case 21:r="pt-page-scaleDown",n="pt-page-scaleUpDown pt-page-delay300";break;case 22:r="pt-page-scaleDownUp",n="pt-page-scaleUp pt-page-delay300";break;case 23:r="pt-page-moveToLeft pt-page-ontop",n="pt-page-scaleUp";break;case 24:r="pt-page-moveToRight pt-page-ontop",n="pt-page-scaleUp";break;case 25:r="pt-page-moveToTop pt-page-ontop",n="pt-page-scaleUp";break;case 26:r="pt-page-moveToBottom pt-page-ontop",n="pt-page-scaleUp";break;case 27:r="pt-page-scaleDownCenter",n="pt-page-scaleUpCenter pt-page-delay400";break;case 28:r="pt-page-rotateRightSideFirst",n="pt-page-moveFromRight pt-page-delay200 pt-page-ontop";break;case 29:r="pt-page-rotateLeftSideFirst",n="pt-page-moveFromLeft pt-page-delay200 pt-page-ontop";break;case 30:r="pt-page-rotateTopSideFirst",n="pt-page-moveFromTop pt-page-delay200 pt-page-ontop";break;case 31:r="pt-page-rotateBottomSideFirst",n="pt-page-moveFromBottom pt-page-delay200 pt-page-ontop";break;case 32:r="pt-page-flipOutRight",n="pt-page-flipInLeft pt-page-delay500";break;case 33:r="pt-page-flipOutLeft",n="pt-page-flipInRight pt-page-delay500";break;case 34:r="pt-page-flipOutTop",n="pt-page-flipInBottom pt-page-delay500";break;case 35:r="pt-page-flipOutBottom",n="pt-page-flipInTop pt-page-delay500";break;case 36:r="pt-page-rotateFall pt-page-ontop",n="pt-page-scaleUp";break;case 37:r="pt-page-rotateOutNewspaper",n="pt-page-rotateInNewspaper pt-page-delay500";break;case 38:r="pt-page-rotatePushLeft",n="pt-page-moveFromRight";break;case 39:r="pt-page-rotatePushRight",n="pt-page-moveFromLeft";break;case 40:r="pt-page-rotatePushTop",n="pt-page-moveFromBottom";break;case 41:r="pt-page-rotatePushBottom",n="pt-page-moveFromTop";break;case 42:r="pt-page-rotatePushLeft",n="pt-page-rotatePullRight pt-page-delay180";break;case 43:r="pt-page-rotatePushRight",n="pt-page-rotatePullLeft pt-page-delay180";break;case 44:r="pt-page-rotatePushTop",n="pt-page-rotatePullBottom pt-page-delay180";break;case 45:r="pt-page-rotatePushBottom",n="pt-page-rotatePullTop pt-page-delay180";break;case 46:r="pt-page-rotateFoldLeft",n="pt-page-moveFromRightFade";break;case 47:r="pt-page-rotateFoldRight",n="pt-page-moveFromLeftFade";break;case 48:r="pt-page-rotateFoldTop",n="pt-page-moveFromBottomFade";break;case 49:r="pt-page-rotateFoldBottom",n="pt-page-moveFromTopFade";break;case 50:r="pt-page-moveToRightFade",n="pt-page-rotateUnfoldLeft";break;case 51:r="pt-page-moveToLeftFade",n="pt-page-rotateUnfoldRight";break;case 52:r="pt-page-moveToBottomFade",n="pt-page-rotateUnfoldTop";break;case 53:r="pt-page-moveToTopFade",n="pt-page-rotateUnfoldBottom";break;case 54:r="pt-page-rotateRoomLeftOut pt-page-ontop",n="pt-page-rotateRoomLeftIn";break;case 55:r="pt-page-rotateRoomRightOut pt-page-ontop",n="pt-page-rotateRoomRightIn";break;case 56:r="pt-page-rotateRoomTopOut pt-page-ontop",n="pt-page-rotateRoomTopIn";break;case 57:r="pt-page-rotateRoomBottomOut pt-page-ontop",n="pt-page-rotateRoomBottomIn";break;case 58:r="pt-page-rotateCubeLeftOut pt-page-ontop",n="pt-page-rotateCubeLeftIn";break;case 59:r="pt-page-rotateCubeRightOut pt-page-ontop",n="pt-page-rotateCubeRightIn";break;case 60:r="pt-page-rotateCubeTopOut pt-page-ontop",n="pt-page-rotateCubeTopIn";break;case 61:r="pt-page-rotateCubeBottomOut pt-page-ontop",n="pt-page-rotateCubeBottomIn";break;case 62:r="pt-page-rotateCarouselLeftOut pt-page-ontop",n="pt-page-rotateCarouselLeftIn";break;case 63:r="pt-page-rotateCarouselRightOut pt-page-ontop",n="pt-page-rotateCarouselRightIn";break;case 64:r="pt-page-rotateCarouselTopOut pt-page-ontop",n="pt-page-rotateCarouselTopIn";break;case 65:r="pt-page-rotateCarouselBottomOut pt-page-ontop",n="pt-page-rotateCarouselBottomIn";break;case 66:r="pt-page-rotateSidesOut",n="pt-page-rotateSidesIn pt-page-delay200";break;case 67:r="pt-page-rotateSlideOut",n="pt-page-rotateSlideIn"}p.addClass(r).on(b,function(){p.off(b),c=!0,l&&a(p,o)}),o.addClass(n).on(b,function(){o.off(b),l=!0,c&&a(p,o)}),k||a(p,o)}function a(e,t){c=!1,l=!1,p(e,t),i=!1}function p(e,t){e.attr("class",e.data("originalClassList")),t.attr("class",t.data("originalClassList")+" pt-page-current")}var o=$("#pt-main"),g=o.children("div.pt-page"),r=$("#iterateEffects"),n=1,s=g.length,m=0,i=!1,c=!1,l=!1,d={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},b=d[Modernizr.prefixed("animation")],k=Modernizr.cssanimations;return e(),{init:e,nextPage:t}}();