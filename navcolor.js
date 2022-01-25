
$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 500) {
          $("nav").addClass("change-color")
       } else {
          $("nav").removeClass("change-color")
       }
    });
 });