var allimages = document.getElementsByClassName("square");

for (var ele of allimages) {
  console.log(ele.src);
  ele.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

var allLinks = document.querySelectorAll("a");

for (var link of allLinks) console.log(link.href);

// var doneTodos = document.querySelectorAll(".done");
// var checkbox = document.querySelector('input[id="scales"]');

// for (var ele of donetodos) console.log(ele);

var text = document.querySelector("p").innerText;
console.log(text);
var html = document.querySelector("p").innerHTML;
console.log(html);

document.querySelector("h1 span").innerText = "Disgusting";

for (var link of allLinks) link.style.borderRadius = "red";

console.log("Done");

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

var spanAll = document.querySelectorAll("span");
var i = 0;
for (var ele of spanAll) ele.style.color = colors[i++];

document.querySelector("h2").classList.add("border");
document.querySelector("h2").classList.add("border");

var list = document.querySelectorAll("li");
for (var ele of list)
  if (ele.className === "highlight") ele.classList.toggle("purple");

// WRITE YOUR CODE IN HERE:
for (var i = 0; i < 100; i++) {
  var newb = document.createElement("button");
  newb.innerText = "Hey!";
  document.querySelector("#container").appendChild(newb);
}
