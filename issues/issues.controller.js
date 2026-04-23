var fs = require("fs");

var getAllIssuesController = (req, res) => {
  var fd = JSON.parse(fs.readFileSync(__dirname + "/issues.txt").toString());
  res.send(fd);
};
module.exports = { getAllIssuesController };
