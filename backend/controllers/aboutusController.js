const Model = require("../models/aboutusModel");

class Controller {
    
  get(req, res) {
    res.send("helo hodhoid");
  }

  post(req, res) {
    res.send("helo hodhoid dfddes rrw r f");
  }

  put(req, res) {
    res.send("hodhod hodhoid dfddes rrw r f");
  }

  delete(req, res) {
    res.send("hodhod hodhoid  deletedddf");
  }
}

const controller = new Controller();
module.exports = controller;
