function addController(req, res) {
  res.send(" HI!!" + (+Number(req.params.x) + +Number(req.params.y)));
}
function mulController(req, res) {
  res.send(req.params.a * req.params.b);
}
module.exports = { addController, mulController };
