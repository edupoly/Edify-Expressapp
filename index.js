var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("HI");
});

app.get("/alltickets", (req, res) => {
  var fd = JSON.parse(fs.readFileSync(__dirname + "/issues.txt").toString());
  res.render("issuesUI.pug", { issues: { ...fd } });
});

app.listen(3700, function () {
  console.log("Server running on 3700");
});
