// Dependencies
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Get all data
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // give new data
  router.post('/burgers', function(req, res) {
    burger.insertOne([
      'burger_name'
    ], [
      req.body.burger_name
    ], function(data) {
      res.redirect('/');
    });
  });
  
  // give update on existing data
  router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function() {
      res.redirect('/');
    });
  });

  // Export routes for server.js to use.
  module.exports = router;