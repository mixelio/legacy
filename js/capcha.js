"use strict";

$(function() {
  var reCaptchaWidth = 302;
  var containerWidth = $(".capture_box").width();
  if (reCaptchaWidth > containerWidth) {
    var reCaptchaScale = containerWidth / reCaptchaWidth;
    $(".g-recaptcha").css({
      transform: "scale(" + reCaptchaScale + ")",
      "transform-origin": "left top"
    });
  }
});
