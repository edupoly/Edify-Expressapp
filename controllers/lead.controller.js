var LeadModel = require("../model/lead.model");
var leadValidationSchema = require("../validations/leadValidation");
const addLeadController = (req, res) => {
  // console.log("request body::::", req.body);
  const { error, value } = leadValidationSchema.validate(req.body, {
    abortEarly: false,
  });
  // console.log("errors:::", error);
  if (error) {
    res.send(error.details);
  } else {
    var newLead = new LeadModel(value);
    newLead.save();
    res.send("Saved...");
  }
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
