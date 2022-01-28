
$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
          $("nav").addClass("change-color")
       } else {
          $("nav").removeClass("change-color")
       }
    });
 });