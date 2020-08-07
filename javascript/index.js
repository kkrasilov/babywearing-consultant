window.onload = function () {
  document.getElementById("feedback-form-button").addEventListener("click", function (event) {
    document.getElementById("feedback-form").reset();
    event.preventDefault();
  });
  $('.button').on('click', function (event) {
    event.preventDefault();
  });
};
