const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/relationship", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  address: [
    {
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  var u = new User({
    name: "Jessi Custer",
    age: 40,
    address: [
      {
        street: "Andhari gali",
        city: "Samshan ghat ke Saamne",
        state: "Maharastra",
        country: "India",
      },
    ],
  });
  const res = await u.save();
  console.log(res);
};

addUser();
