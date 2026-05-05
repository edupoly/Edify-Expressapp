var express = require("express");
const {
  addLeadController,
  getLeadsController,
  getLeadByIdController,
} = require("../controllers/lead.controller");
var router = express.Router();

router.post("/addLead", addLeadController);

router.get("/allLeads", getLeadsController);

router.get("/getLeadById/:id", getLeadByIdController);

module.exports = router;
