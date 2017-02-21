$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $("#voter").show();
  } else if (age === 18) {
    alert("Congratulations!");
    $("#voter").show();
  } else {
    $("#non-voter").show();
  }

  $("button#cant-vote").click(function() {
      $("#voter").remove();
      $("#non-voter").show();
  })
});
