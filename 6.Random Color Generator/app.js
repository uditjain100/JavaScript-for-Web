var body = document.querySelector("body");
var btn = document.querySelector("#btn");
var dcf = document.querySelector("#display_color_field");

var rand1, rand2, rand3;

btn.addEventListener("mouseenter", () => {
  rand1 = Math.floor(Math.random() * 256);
  rand2 = Math.floor(Math.random() * 256);
  rand3 = Math.floor(Math.random() * 256);
  body.style.backgroundColor = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
  console.log("rgb(" + rand1 + "," + rand2 + "," + rand3 + ")");
  dcf.innerText = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
});
