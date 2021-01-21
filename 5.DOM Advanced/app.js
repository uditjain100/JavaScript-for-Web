var btn = document.querySelector("#btn2");

btn.onclick = function () {
  console.log("Hey There, you clicked me !!");
};

btn.onmouseenter = () => {
  console.log("Stop touching me");
};

var hab = document.querySelector("#hab");

hab.addEventListener("mousedown", () => {
  console.log("Hello there :)");
});
hab.addEventListener("mouseup", () => {
  console.log("Good bye then :( ");
});

window.addEventListener("keydown", function (event) {
  console.log(event.code);
  console.log(event.key);
});
