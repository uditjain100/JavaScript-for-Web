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

// Without Promises
fakeRequestCallback(
  "pokemon.com",
  function (msg) {
    console.log(msg + " 1");
    fakeRequestCallback(
      "pokemon.com",
      function (msg) {
        console.log(msg + " 2");
      },
      function (error) {
        console.log(error + " in 2");
      }
    );
  },
  function (error) {
    console.log(error + " in 1");
  }
);

function fakeRequestPromise(url) {
    return new Promise(resolve,reject) => {
    const delay = Math.floor(Math.random() * 2500) + 500;
    setTimeout(() => {
      if (delay > 2000) {
        failure("Connection TimeOut !!");
      } else {
        success("Here is your fake Data");
      }
    }, delay);
  }}
  