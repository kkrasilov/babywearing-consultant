$(document).ready(function () {
  $('.feedback-form-button').on('click', function(event) {
    $('#feedback-form')[0].reset();
    event.preventDefault();
  });

  $('.button').on('click', function (event) {
    event.preventDefault();
  });
});
