const request = new XMLHttpRequest();

request.onload = function () {
  console.log("YEAHHHHHHH...");
  console.log(this);
};

request.onerror = () => {
  console.log("ERROR :: :(");
  console.log(this);
};

request.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
request.send();
