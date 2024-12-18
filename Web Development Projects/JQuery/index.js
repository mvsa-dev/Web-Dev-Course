let h1 = $("h1");
$(document).on("keydown", alter);

function alter(event) {
  let key = event.key;
  h1.html(key);
}
