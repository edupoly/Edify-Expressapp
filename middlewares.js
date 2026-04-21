var uid = require("uuid");
var session = require("express-session");
var fs = require("fs");
function createSession() {
  return session({
    secret: "idonttellyou",
    genid: () => {
      return uid.v4();
    },
    cookie: {
      maxAge: 60000,
    },
  });
}

function userLogin(req, res) {
  return (req, res) => {
    console.log(req.body);
    var users = JSON.parse(
      fs.readFileSync(__dirname + "/users.txt").toString(),
    );
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
      req.session.username = req.body.username;
      req.session.password = req.body.password;
      // res.cookie("username", req.body.username);
      // res.cookie("password", req.body.password);
    }
    res.send("Please wait");
  };
}

module.exports = { createSession, userLogin };
