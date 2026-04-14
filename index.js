var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
var cookieParser = require("cookie-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false })); //what this line does
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", function (req, res) {
  console.log("Request recieved");
  res.send("Welcome to ExpressJS API endpoint creation");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  var users = JSON.parse(fs.readFileSync(__dirname + "/users.txt").toString());
  var k = users.find((user) => {
    if (
      user.username === req.body.username &&
      user.password === req.body.password
    ) {
      return true;
    }
  });
  if (k) {
    console.log("hi");
    res.cookie("username", req.body.username);
    res.cookie("password", req.body.password);
  }
  res.send("Please wait");
});

app.get("/regStudent", function (req, res) {
  console.log(req.query);
  res.send("Registration is in Process... Wait for the reply");
});

app.post("/regStudent", function (req, res) {
  console.log("req.params", req.params);
  console.log("req.query", req.query);
  console.log("req.body", req.body);
  res.send(" lets understand the POST");
});
function auth(req, res, next) {
  var users = JSON.parse(fs.readFileSync(__dirname + "/users.txt").toString());
  var k = users.find((user) => {
    if (
      user.username === req.cookies.username &&
      user.password === req.cookies.password
    ) {
      return true;
    }
  });
  if (k) {
    next();
  } else {
    res.redirect("/login.html");
  }
}
app.get("/getAllTickets", auth, (req, res) => {
  var fd = JSON.parse(fs.readFileSync(__dirname + "/issues.txt").toString());
  res.send(fd);
});

app.post("/riseTicket", (req, res) => {
  console.log(req.body);
  var fd = JSON.parse(fs.readFileSync(__dirname + "/issues.txt").toString());
  var issueObject = {
    ...req.body,
    timeStamp: Date.now(),
    status: "Pending",
  };
  fd.push(issueObject);
  var s = fs.writeFileSync(__dirname + "/issues.txt", JSON.stringify(fd));
  res.send({ msg: "please wait" });
});

app.put("/updateTicket/:id", (req, res) => {
  var fd = JSON.parse(fs.readFileSync(__dirname + "/issues.txt").toString());
  fd[req.params.id].status = "Processing...";
  var s = fs.writeFileSync(__dirname + "/issues.txt", JSON.stringify(fd));
  res.send({ msg: "ticket Updated" });
});

app.delete("/deleteTicket/:id", (req, res) => {
  var fd = JSON.parse(fs.readFileSync(__dirname + "/issues.txt").toString());
  fd.splice(req.params.id, 1);
  var s = fs.writeFileSync(__dirname + "/issues.txt", JSON.stringify(fd));
  res.send({ msg: "ticket DEleted" });
});

app.get("/add/:x/:y", auth, function (req, res) {
  console.log(req.params);
  res.send(Number(req.params.x) + Number(req.params.y));
});

app.get("/sum", (req, res) => {
  console.log(req.query);
  res.send("Please wait...");
});

app.listen(3700, function () {
  console.log("Server running on 3700");
});

// http://localhost:3700/sum?a=34&b=45
// (req.query)

// http://localhost:3700/add/89/45
// (req.params)
