var html = document.querySelector("html");
var body = document.querySelector(".container");
var btn = document.querySelector("#generate_btn");
var dcf = document.querySelector("#display_color_field");

var rand1, rand2, rand3;

var changeColor = function () {
  rand1 = Math.floor(Math.random() * 256);
  rand2 = Math.floor(Math.random() * 256);
  rand3 = Math.floor(Math.random() * 256);
  body.style.backgroundColor = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
  console.log("rgb(" + rand1 + "," + rand2 + "," + rand3 + ")");
  dcf.innerText = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
};

// html.addEventListener("mouseenter", changeFun);
// body.addEventListener("mouseenter", changeFun);
btn.addEventListener("click", changeColor);

// for (var i = 0; i < 50; i++) {
//   var newB = document.createElement("button");
//   newB.innerText = "Click Me";
//   body.appendChild(newB);
// }
var allbtns = document.querySelectorAll("#btn");
var convertColor = function () {
  rand1 = Math.floor(Math.random() * 256);
  rand2 = Math.floor(Math.random() * 256);
  rand3 = Math.floor(Math.random() * 256);
  this.style.backgroundColor = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
  //   this.style.color = "rgb(" + rand3 + "," + rand2 + "," + rand1 + ")";
};

for (var btn of allbtns) btn.addEventListener("click", convertColor);
