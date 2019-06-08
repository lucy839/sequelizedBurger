// Requiring our models
var db = require("../models");

module.exports = function (app) {
	// list orders
	app.get("/", function (req, res) {
		var query = {};
		if (req.query.customer_id) {
			query.CustomerId = req.query.customer_id;
		}
		db.Burger.findAll({
			where: query
			, include: [db.Customer]
		}).then(function (dbBurger) {
			res.render("index", { burgers: dbBurger });
		});

	});

	// create burger order
	app.post("/burgers", function (req, res) {
			db.Burger.create({
				burger_name: req.body.burger_name,
			}).then(function (data) {
				res.redirect("/");
			});
	});

	// create customer for the order and devour 
	app.post("/burger/eat/:id", function (req, res) {
			db.Customer.create({
				customer_name: req.body.customer
			}).then(function (newCustomer) {
				db.Burger.update({
					devoured: true,
					CustomerId: newCustomer.id
				}, {
						where: {
							id: req.params.id
						},
						include: [db.Customer]
					});
			}).then(function () {
				res.redirect("/");
			});
	});

	// delete order
	app.post("/burger/delete/:id", function (req, res) {
		db.Burger.destroy({
			where: {
				id: req.params.id
			}
		}).then(function () {
			res.redirect("/");
		});
	});
};