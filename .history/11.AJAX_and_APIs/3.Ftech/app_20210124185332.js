// fetch Approach

const fetchApproach = () => {
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
};

// fetchApproach();

async function fetchData() {
  try {
    const response = await fetch(
      "https://api.cryptonator.com/api/ticker/abtc-usd"
    );
    const data = await response.json();
    console.log("Data is Here", data);
  } catch (error) {
    console.log("Something went Wrong !! ... ");
    console.log(error);
  }
}

fetchData();
