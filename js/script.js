"use strict";

$(document).ready(function() {
  $(".games__slider").slick({
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    speed: 1000,
    dots: false,
    centerMode: true
    //autoplay: true
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

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".burger__menu");

if (iconMenu) {
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
