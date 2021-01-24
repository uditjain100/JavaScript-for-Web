fetch("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log("Data is here ... ", res);
  })
  .catch((error) => {
    console.log("Something went wrong !!", error);
  });
