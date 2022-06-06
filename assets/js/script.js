/* -----------------------------------------------------------------------------
File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function ($) {
  "use strict";

  var Medi = {
    init: function () {
      this.Basic.init();
    },

    Basic: {
      init: function () {
        this.preloader();
        this.BackgroundImage();
        this.MobileMenu();
        this.SidebarMenu();
        this.scrollTop();
        this.TestiSlider();
      },
      preloader: function () {
        $(window).on("load", function () {
          $(".preloader").delay(1500).fadeOut("slow");
        });
      },
      BackgroundImage: function () {
        $("[data-background]").each(function () {
          $(this).css(
            "background-image",
            "url(" + $(this).attr("data-background") + ")"
          );
        });
      },
      MobileMenu: function () {
        jQuery(window).on("scroll", function () {
          if (jQuery(window).scrollTop() > 250) {
            jQuery(".main-header").addClass("sticky-on");
          } else {
            jQuery(".main-header").removeClass("sticky-on");
          }
        });
        $(".open_mobile_menu").on("click", function () {
          $(".mobile_menu_wrap").toggleClass("mobile_menu_on");
        });
        $(".open_mobile_menu").on("click", function () {
          $("body").toggleClass("mobile_menu_overlay_on");
        });
        if ($(".mobile_menu li.dropdown ul").length) {
          $(".mobile_menu li.dropdown").append(
            '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
          );
          $(".mobile_menu li.dropdown .dropdown-btn").on("click", function () {
            $(this).prev("ul").slideToggle(500);
          });
        }
      },
      SidebarMenu: function () {
        if ($(".sidebar_dropdown").length) {
          $(".sidebar_dropdown").append(
            '<div class="sidebar-dropdown-btn"><span class="fas fa-plus"></span></div>'
          );
          $(".sidebar-dropdown-btn").on("click", function () {
            $(this).prev("ul").slideToggle(500);
            $(this).html(
              $(this).html() == '<span class="fas fa-plus"></span>'
                ? '<span class="fas fa-minus"></span>'
                : '<span class="fas fa-plus"></span>'
            );
          });
        }
      },
      TestiSlider: function () {
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          autoplay: true,
          loop: true,
          spaceBetween: 10,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      },
      scrollTop: function () {
        $(window).on("scroll", function () {
          var ScrollBarPosition = $(this).scrollTop();
          if (ScrollBarPosition > 200) {
            $(".scroll-top").fadeIn();
          } else {
            $(".scroll-top").fadeOut();
          }
        });
        $(".scroll-top").on("click", function () {
          $("body,html").animate({
            scrollTop: 0,
          });
        });
      },
    },
  };
  jQuery(document).ready(function () {
    Medi.init();
  });
})(jQuery);
