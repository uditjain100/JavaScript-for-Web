// Async function automatically returns promises

var api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

async function pakemon(i) {
  setTimeout(() => {
    document.querySelector("img").src = api + i + ".png";
  }, 100);
  console.log(i);
}

function work() {
  for (var i = 0; i < 50; i++) {
    pokemon(i);
  }
}
