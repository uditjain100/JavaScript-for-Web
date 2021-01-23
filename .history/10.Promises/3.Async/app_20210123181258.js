// Async function automatically returns promises

async function pakemon(i) {
  console.log(i);
}

function work() {
  for (var i = 0; i < 50; i++) {
    pokemon(i);
  }
}
