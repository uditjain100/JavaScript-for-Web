const express = require("express");
const router = express.Router();

router.use((req., res , next) => {
    if(req.query.isAdmin){
        next();
    }else{
        res.send("You FuckedUp :)")
    }
})

router.get("/", (req, res) => {
  res.send("Heyyyyyyyyyyyy ... !!");
});

router.post("/", (req, res) => {
  res.send("Heyyyyyyyyyyyy posted ... !! ");
});

router.get("/:id", (req, res) => {
  res.send("Heyyyyyyyyyyyy  unique ... !!");
});

module.exports = router;
