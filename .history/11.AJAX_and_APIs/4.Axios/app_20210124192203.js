const axiosFetch = async () => {
  try {
    const response = await axios.get(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    console.log("Data is Here ... ", response);
  } catch (error) {
    console.log("Something went Wrong !!! ... ", error);
  }
};

axiosFetch();
