const express = require("express");
const router = express.Router();
const {
  addController,
  mulController,
} = require("../controllers/arth.controller");

router.get("/add/:x/:y", addController);

router.get("/mul/:a/:b", mulController);

router.get("/sum", (req, res) => {
  console.log(req.query);
  res.send("Please wait...");
});

module.exports = router;
