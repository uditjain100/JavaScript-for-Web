const axiosFetch = async () => {
  try {
    const response = await axios.get(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    console.log("Data is Here ... ", response);
    console.log(response.data.ticker.price);
  } catch (error) {
    console.log("Something went Wrong !!! ... ", error);
  }
};

// axiosFetch();

const fetchDadJoke = async () => {
  const joke = await axios.get("https://icanhazdadjoke.com/");
};
