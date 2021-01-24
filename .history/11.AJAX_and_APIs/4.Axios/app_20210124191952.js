const axiosFetch = async () => {
  try {
    const response = axios.get(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    console.log(response);
  } catch (error) {
    console.log("Something went Wrong !!! ... ", error);
  }
};
