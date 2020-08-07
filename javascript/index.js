let formFeedback = document.getElementById("feedback-form")
formFeedback.addEventListener("click", function (event) {
  formFeedback.reset();
  event.preventDefault();
});

$('.button').on('click', function (event) {
  event.preventDefault();
});
