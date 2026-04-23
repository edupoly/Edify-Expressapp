var express = require("express");
const { getAllIssuesController } = require("./issues.controller");
var router = express.Router();
router.get("/", getAllIssuesController);
module.exports = router;
