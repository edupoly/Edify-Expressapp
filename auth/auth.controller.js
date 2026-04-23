var fs = require("fs");
var jwt = require("jsonwebtoken");

var loginController = (req, res) => {
  console.log(req.body);
  var fd = JSON.parse(fs.readFileSync(__dirname + "/users.txt").toString());
  var k = fd.find((user) => {
    if (
      user.username === req.body.username &&
      user.password === req.body.password
    ) {
      return true;
    }
  });
  if (k) {
    //create the token
    var token = jwt.sign({ ...req.body }, "funnysecret");
    res.send({ msg: "loginsuccess", token: token });
  } else {
    res.send({ msg: "loginfailed" });
  }
};

module.exports = { loginController };
