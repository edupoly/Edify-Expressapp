var LeadModel = require("../model/lead.model");

const addLeadController = (req, res) => {
  console.log(req.body);
  var mode = req.body.isOffline === "Offline" ? true : false;
  var newLead = new LeadModel({ ...req.body, isOffline: mode });
  console.log(newLead);
  //   newLead.save();
  res.send("Please wait....");
};

const getLeadsController = (req, res) => {
  LeadModel.find().then((data) => {
    res.send(data);
  });
};

const getLeadByIdController = (req, res) => {
  console.log(req.params.id);
  LeadModel.findById(req.params.id).then((data) => {
    res.send(data);
  });
};
module.exports = {
  getLeadByIdController,
  getLeadsController,
  addLeadController,
};
