$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $("#voter").show();
  } else {
    $("#non-voter").show();
  }
});
