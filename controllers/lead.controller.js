var LeadModel = require("../model/lead.model");

const addLeadController = (req, res) => {
  console.log("request body::::", req.body);
  // req.body.isOffline = req.body.isOffline == "Offline" ? true : false;
  var newLead = new LeadModel(req.body);
  console.log("newLead:::::", newLead);
  newLead
    .validate()
    .then(() => {
      newLead.save();
      res.send("Please wait");
    })
    .catch((e) => {
      console.log("Error occured", e.errors.name.properties.message);
      res.send({ error: e.errors.name.properties.message });
    });
  // newLead.save();
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
