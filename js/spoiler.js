"use strict";

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

$(function() {
  // открываем вкладку по умолчанию

  $(".partners_faq__spoller_item .spoller__text").slideUp();
  $(".active__item .spoller__text").slideDown();

  $("#accordion .spoller__title").on("click", function() {
    $("#accordion .spoller__text")
      .not($(this).next())
      .slideUp(299);

    $(".partners_faq__spoller_item").removeClass("active__item");
    $(this)
      .next()
      .slideDown(299)
      .parent()
      .addClass("active__item");
  });
});
