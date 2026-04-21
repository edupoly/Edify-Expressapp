var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
var arth = require("./routes/arth.routes");
var ticketRoutes = require("./routes/tickets.routes");
var { createSession, userLogin } = require("./middlewares");

app.use(createSession());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/math", arth);
app.use("/tickets", ticketRoutes);

app.post("/login", userLogin);

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

// function auth(req, res, next) {
//   var users = JSON.parse(fs.readFileSync(__dirname + "/users.txt").toString());
//   var k = users.find((user) => {
//     if (
//       user.username === req.cookies.username &&
//       user.password === req.cookies.password
//     ) {
//       return true;
//     }
//   });
//   if (k) {
//     next();
//   } else {
//     res.redirect("/login.html");
//   }
// }

function auth(req, res, next) {
  var users = JSON.parse(fs.readFileSync(__dirname + "/users.txt").toString());
  if (req.session.username && req.session.password) {
    var k = users.find((user) => {
      if (
        user.username === req.session.username &&
        user.password === req.session.password
      ) {
        return true;
      }
    });
    if (k) {
      next();
    } else {
      res.redirect("/login.html");
    }
  } else {
    res.redirect("/login.html");
  }
}

app.listen(3700, function () {
  console.log("Server running on 3700");
});

// http://localhost:3700/sum?a=34&b=45
// (req.query)

// http://localhost:3700/add/89/45
// (req.params)
