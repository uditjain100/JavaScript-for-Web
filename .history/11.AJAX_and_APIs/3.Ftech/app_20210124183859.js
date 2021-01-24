fetch("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log("Data is here ... ");
    console.log("res");
  })
  .catch((error) => {
    console.log("Something went wrong !!", error);
  });
