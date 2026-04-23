var express = require("express");
var router = express.Router();

const { loginController } = require("./auth.controller");

router.post("/login", loginController);

module.exports = router;
