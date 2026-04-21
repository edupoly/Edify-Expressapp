var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/getAllTickets", (req, res) => {
  var fd = JSON.parse(fs.readFileSync(__dirname + "/issues.txt").toString());
  res.send(fd);
});

router.post("/riseTicket", (req, res) => {
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

router.put("/updateTicket/:id", (req, res) => {
  var fd = JSON.parse(fs.readFileSync(__dirname + "/issues.txt").toString());
  fd[req.params.id].status = "Processing...";
  var s = fs.writeFileSync(__dirname + "/issues.txt", JSON.stringify(fd));
  res.send({ msg: "ticket Updated" });
});

router.delete("/deleteTicket/:id", (req, res) => {
  var fd = JSON.parse(fs.readFileSync(__dirname + "/issues.txt").toString());
  fd.splice(req.params.id, 1);
  var s = fs.writeFileSync(__dirname + "/issues.txt", JSON.stringify(fd));
  res.send({ msg: "ticket DEleted" });
});

module.exports = router;
