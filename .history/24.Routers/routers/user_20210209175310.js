const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Heyyyyyyyyyyyy user ... !!");
});

router.post("/", (req, res) => {
  res.send("Heyyyyyyyyyyyy user posted ... !! ");
});

router.get("/:id", (req, res) => {
  res.send("Heyyyyyyyyyyyy unique user ... !!");
});

module.exports = router;
