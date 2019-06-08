// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function (app) {
	// Burger
	app.get("/", function (req, res) {
		var query = {};
		if (req.query.customer_id) {
			query.CustomerId = req.query.customer_id;
		}
		db.Burger.findAll({
			// order: [
			//   ["burger_name", "ASC"]
			// ],
			// include: [{
			// model: db.Customer,
			// attributes: ["customer_name"]
			// }]
			where: query
			, include: [db.Customer]
			// include: [db.Customer]
		}).then(function (dbBurger) {
			res.render("index", { burgers: dbBurger });
		});

	});


	app.post("/burgers", function (req, res) {

		db.Burger.create({
			burger_name: req.body.burger_name,
			// customerId: customerid
		}).then(function (data) {
			res.redirect("/");
		});

	});



	// app.post("/burgers", function (req, res) {
	//   db.Burger.create({
	//     burger_name: req.body.burger_name
	//   }).then(function () {
	//     res.redirect("/");
	//   });

	// });


	// app.put("/:id", function(req, res) {
	// 	if (req.body.customer !== undefined) {
	// 		db.customer.update(
	// 		{
	// 			name: req.body.customer
	// 		},
	// 		{
	// 			where: {
	// 				id: req.params.id
	// 			}
	// 		}).then(function() {
	// 			db.burger.update(
	// 				{
	// 					devoured: req.body.boolean === "true"
	// 				},
	// 				{
	// 					where: {
	// 						id: req.params.id
	// 					}
	// 				}
	// 			).then(function(data) {
	// 				res.redirect("/");
	// 			});
	// 		});
	// 	}

	// 	else {
	// 		db.burger.update(
	// 			{
	// 				devoured: req.body.boolean === "true"
	// 			},
	// 			{
	// 				where: {
	// 					id: req.params.id
	// 				}
	// 			}
	// 		).then(function(data) {
	// 			res.redirect("/");
	// 		});
	// 	}
	// });
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
		//   if (req.body.customer !== undefined) {
		// 		db.Customer.update(
		// 		{
		// 			customer_name: req.body.customer
		// 		},
		// 		{
		// 			where: {
		// 				id: req.params.id
		// 			}
		// 		}).then(function() {
		// 			db.Burger.update(
		// 				{
		// 					devoured: true
		// 				},
		// 				{
		// 					where: {
		// 						id: req.params.id
		// 					}
		// 				}
		// 			).then(function(data) {
		// 				res.redirect("/");
		// 			});
		// 		});
		// 	}

		// 	else {
		//   db.Burger.update({
		//     devoured: true
		//   }, {
		//       where: { id: req.params.id }
		//     })
		//     .then(function (dbTodso) {
		//       res.redirect('/');
		//     });
		//   }
		// });



		// app.post("/burger/eat/:id", function (req, res) {
		// 	db.Burger.update({
		// 		devoured: true
		// 	}, {
		// 			where: { id: req.params.id }
		// 		})
		// 		.then(function (dbTodso) {
		// 			res.redirect('/');

		// 		});
		// 	});
		app.post("/burger/delete/:id", function(req, res) {
			db.Burger.destroy({
				where: {
					id: req.params.id
				}
			}).then(function() {
				res.redirect("/");
			});
		});
	};