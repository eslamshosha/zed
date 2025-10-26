$(document).ready(function () {
  ///////// ** main** /////////
  var mainSlider = new Swiper(".main-slider .swiper-container", {
    loop: false,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });
  ///////// **product-section** /////////
  var productSlider = new Swiper(".product-slider .swiper-container", {
    autoplay: true,
    pagination: {
      el: ".product-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-slider .swiper-btn-next",
      prevEl: ".product-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
  ///////// **cat-section** /////////
  var productSlider = new Swiper(".cat-section .swiper-container", {
    autoplay: true,
    pagination: {
      el: ".product-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".cat-slider .swiper-btn-next",
      prevEl: ".cat-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html").css("scroll-behavior", "unset");

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
    setTimeout(() => {
      $("html").css("scroll-behavior", "smooth");
    }, 1000);
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  ///////// **product-qty** /////////
  // $(".qty-plus").on("click", function () {
  //   var $parentElm = $(this).parents(".item-qty");
  //   var maxVal = parseInt($parentElm.find(".qty-input").attr("data-max"));
  //   var value = $parentElm.find(".qty-input").val();
  //   if (value < maxVal) {
  //     value++;
  //   }
  //   $parentElm.find(".qty-input").val(value);
  // });
  // $(".qty-minus").on("click", function () {
  //   var $parentElm = $(this).parents(".item-qty");
  //   var minVal = parseInt($parentElm.find(".qty-input").attr("data-min"));
  //   var value = $parentElm.find(".qty-input").val();
  //   if (value > minVal) {
  //     value--;
  //   }
  //   $parentElm.find(".qty-input").val(value);
  // });
});
