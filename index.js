var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var authRouter = require("./auth/auth.routes");
var issuesRouter = require("./issues/issues.router");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/issues", issuesRouter);

app.get("/", (req, res) => {
  res.send("Hello Welcome");
});

app.listen(3700, function () {
  console.log("Server running on 3700");
});
