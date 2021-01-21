document.querySelector("#btn").addEventListener("click", function (evnt) {
  console.log(evnt);
});

var body = document.querySelector("body");

window.addEventListener("pointermove", (evnt) => {
  console.log(evnt);
  var rand1 = evnt.clientX % 256;
  var rand2 = evnt.clientY % 256;
  var rand3 = (rand1 + rand2) % 256;
  body.style.backgroundColor = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
});
