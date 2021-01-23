// Async function automatically returns promises

var api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

async function pakemon(i) {
  setTimeout(() => {
    document.querySelector("img").src = "" + api + i + ".png";
  }, 100);
  console.log(i);
}

function work() {
  for (var i = 1; i < 873; i++) {
    pokemon(i);
  }
}
