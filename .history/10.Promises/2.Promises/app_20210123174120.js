// Without Promises
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
function callbackWithoutPromises() {
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
}

// callbackWithoutPromises();

// With Promises
function fakeRequestPromise(url) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2500) + 500;
    setTimeout(() => {
      if (delay > 2000) {
        reject("Connection TimeOut !!");
      } else {
        resolve("Here is your fake Data");
      }
    }, delay);
  });
}

// With Promises
function callbackWithPromises() {
  fakeRequestPromise("books.com")
    .then(() => {
      console.log("Here is your fake Data 1");
      fakeRequestPromise("books.com")
        .then(() => {
          console.log("Here is your fake Data 2");
        })
        .catch(() => {
          console.log("Connection TimeOut !! in 2");
        });
    })
    .catch(() => {
      console.log("Connection TimeOut !! in 1");
    });
}

// callbackWithPromises();

function promisesMagic() {
  fakeRequestPromise("books.com")
    .then((msg) => {
      console.log(msg + " 1");
      return fakeRequestPromise("bools.com");
    })
    .then(() => {
      console.log("Here is your fake Data 2");
      return fakeRequestPromise("bools.com");
    })
    .then(() => {
      console.log("Here is your fake Data 3");
    })
    .catch(() => {
      console.log("Connection TimeOut !!");
    });
}

promisesMagic();
