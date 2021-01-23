function fakeRequestCallback(url, success, failure) {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection TimeOut !!");
    } else {
      success("Here is your fake Data");
    }
  }, delay);
}

fakeRequestCallback(
  "pokemon.com",
  function (msg) {
    console.log(msg);
  },
  function (error) {
    console.log(error);
  }
);
