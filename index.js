require("dotenv").config();

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var connectDB = require("./db");
connectDB();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var leadRoutes = require("./routes/lead.routes");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/lead", leadRoutes);

app.listen(process.env.PORT || 3700, function () {
  console.log("Server running on 3700");
});
