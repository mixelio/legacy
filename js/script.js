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

new Swiper(".benefits__swiper", {
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
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2
    },
    700: {
      slidesPerView: 3
    },
    901: {
      slidesPerView: 4
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

const social = document.querySelector(".header_social__slide");

const socialRow = document.querySelector(".header__follow_row");

if (social) {
  social.addEventListener("click", function(e) {
    social.classList.toggle("_active");
    socialRow.classList.toggle("_active");
  });
}

const social1 = document.querySelector(".header_social__slide_1");
const socialRow1 = document.querySelector(".header__follow_row_1");

if (social1) {
  social1.addEventListener("click", function(e) {
    social1.classList.toggle("_active");
    socialRow1.classList.toggle("_active");
  });
}

const tabs = document.querySelectorAll(".select_game__item");
const tabsItems = document.querySelectorAll(".tab_body");

tabs.forEach(function(item) {
  item.addEventListener("click", function(e) {
    e.preventDefault();
    let tabActive = item;
    let tabId = tabActive.getAttribute("data-tab");
    let tabActiveContent = document.querySelector(tabId);
    tabs.forEach(function(item) {
      item.classList.remove("_active");
    });
    tabsItems.forEach(function(item) {
      item.classList.remove("_active");
    });
    tabActive.classList.add("_active");
    tabActiveContent.classList.add("_active");
  });
});

// $(".select_game__item").click(function(e) {
//   e.preventDefault();
//   $(".select_game__item").removeClass("_active");
//   $(this).addClass("_active");
// });
