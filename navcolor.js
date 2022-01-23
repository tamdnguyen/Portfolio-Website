
$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 200) {
          $("nav").addClass("change-color")
       } else {
          $("nav").removeClass("change-color")
       }
    });
 });