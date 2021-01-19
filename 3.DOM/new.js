var allimages = document.getElementsByClassName("square");

for (var ele of allimages) {
  console.log(ele.src);
  ele.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

var allLinks = document.querySelectorAll("a");

for (var link of allLinks) console.log(link.href);

var doneTodos = document.querySelectorAll(".done");
var checkbox = document.querySelector('input[id="scales"]');

for (var ele of donetodos) console.log(ele);
