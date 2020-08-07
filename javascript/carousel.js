$(document).ready(function () {
  $('.next').on('click', function () {
    let currentSlider = $('.slider.active');
    let nextSlider = currentSlider.next();
    let currentIndicator = $('.carousel-indicator.active');
    let nextIndicator = currentIndicator.next();

    if (nextSlider.length) {
      currentSlider.removeClass('active');
      nextSlider.addClass('active');
      currentIndicator.removeClass('active');
      nextIndicator.addClass('active');
      $('.fa-angle-double-left').css("color", "gray");
      if (!nextSlider.next().length) {
        $('.fa-angle-double-right').css("color", "#e0e0e0");
      }
    }
  });

  $('.prev').on('click', function () {
    let currentSlider = $('.slider.active');
    let prevSlider = currentSlider.prev();
    let currentIndicator = $('.carousel-indicator.active');
    let prevIndicator = currentIndicator.prev();

    if (prevSlider.length) {
      currentSlider.removeClass('active');
      prevSlider.addClass('active');
      currentIndicator.removeClass('active');
      prevIndicator.addClass('active');
      $('.fa-angle-double-right').css("color", "gray");
      if (!prevSlider.prev().length) {
        $('.fa-angle-double-left').css("color", "#e0e0e0");
      }
    }
  });

  $('.carousel-indicator').click(function () {
    let indexCurrentElement = $(this).index();
    $('.carousel-indicator').each(function (index) {
      if (index === indexCurrentElement) {
        $(this).addClass('active');
        $('.slider').removeClass('active');
        $(".slider:eq(" + index + ")").addClass('active');
        backlightAngleDouble(index);
      } else {
        $(this).removeClass('active');
      }
    });
  });

  function backlightAngleDouble(index) {
    if (index === 0 && $('.carousel-indicator').length > 0) {
      $('.fa-angle-double-left').css("color", "#e0e0e0");
      $('.fa-angle-double-right').css("color", "gray");
    } else if (index === $('.carousel-indicator').length - 1 && $('.carousel-indicator').length > 0) {
      $('.fa-angle-double-right').css("color", "#e0e0e0");
      $('.fa-angle-double-left').css("color", "gray");
    } else {
      $('.fa-angle-double-right').css("color", "gray");
      $('.fa-angle-double-left').css("color", "gray");
    }
  }
});
