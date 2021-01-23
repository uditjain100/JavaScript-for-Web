function fakeRequestCallback(url, success, failure) {
  const delay = Math.floor(Math.random() * 2500) + 500;
  setTimeout(() => {
    if (delay > 2000) {
      failure("Connection TimeOut !!");
    } else {
      success("Here is your fake Data");
    }
  }, delay);
}

fakeRequestCallback(
  "pokemon.com",
  function (msg) {
    console.log(msg + "data1");
    fakeRequestCallback(
      "pokemon.com",
      function (msg) {
        console.log(msg + "data2");
      },
      function (error) {
        console.log(error + "data2");
      }
    );
  },
  function (error) {
    console.log(error + "data1");
  }
);
