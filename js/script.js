"use strict";

new Swiper(".update__swiper", {
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 3,
  spaceBetween: 70,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    850: {
      slidesPerView: 3
    }
  }
});

new Swiper(".games__swiper", {
  loop: true,
  slidesPerView: 1,
  speed: 700,
  spaceBetween: 90,
  centeredSlides: true,
  loopedSlides: 3,
  autoplay: {
    delay: 3000
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    hideOnClick: !0
  }
});

new Swiper(".blog_news__slider", {
  spaceBetween: 23,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },

  mousewheel: {
    sensitivity: 2
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    320: {
      direction: "horizontal",
      spaceBetween: 20,
      slidesPerView: 1,
      mousewheel: false
    },
    450: {
      slidesPerView: 2
    },
    601: {
      direction: "vertical",
      slidesPerView: 2
    }
  }
});

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".burger__menu");
const logo = document.querySelector(".header__logo");

if (iconMenu) {
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    logo.classList.toggle("_active");
  });
}

$(function() {
  // открываем вкладку по умолчанию

  $(".support_faq__spoller_item .spoller__text").slideUp();
  $(".active__item .spoller__text").slideDown();

  $("#accordion .spoller__title").on("click", function() {
    $("#accordion .spoller__text")
      .not($(this).next())
      .slideUp(299);

    $(".support_faq__spoller_item").removeClass("active__item");
    $(this)
      .next()
      .slideDown(299)
      .parent()
      .addClass("active__item");
  });
});

const play = document.querySelector(".play");
const video = document.querySelector(".content__video");
const playActive = document.querySelector("._playActive");
const playStop = document.querySelector(".playStop");

if (!playActive) {
  play.addEventListener("click", function(e) {
    play.classList.add("_playActive");
    video.setAttribute("autoplay", "");
    video.setAttribute("controls", "");
  });
}
