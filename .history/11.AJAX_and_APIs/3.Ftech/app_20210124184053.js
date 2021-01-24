fetch("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log("Data is to be parsed ... ", res);
    return res.json();
  })
  .then((data) => {
    console.log("Data is here ... ", data);
  })
  .catch((error) => {
    console.log("Something went wrong !!", error);
  });
