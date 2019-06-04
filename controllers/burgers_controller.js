// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
      res.render("index", { burgers: dbBurger });
    });

  });

  app.post("/burgers", function (req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function () {
      res.redirect("/");
    });

  });

  app.post("/burger/eat/:id", function (req, res) {
    db.Burger.update({
      devoured: true
    }, {
        where: { id: req.params.id }
      })
      .then(function (dbTodso) {
        res.redirect('/');
      });

  });
};