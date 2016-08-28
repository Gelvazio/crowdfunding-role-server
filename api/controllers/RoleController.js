/*jshint esversion: 6 */

/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: (req, res) => {
		coordinator = User.find({user_id: req.param('coordinator')}).exec((err, records) => {
			if(err){
				res.status = 400;
				return res.send("Invalid coordinator");
			}

			obj = {};
			obj.name = req.param('name');
			obj.where = req.param('where');
			obj.when = req.param('when');
			obj.cost = req.param('cost');
			obj.coordinator = records[0];
			Role.create(obj).exec((err, role) => {
				if(err){
					res.status(400);
					return res.send("Error creating role: " + err);
				}
				User.find({user_id: JSON.parse(req.param('members'))}).exec((err, users) => {
					if(err){
						res.status(400);
						return res.send("Error creating users for role: " + err);
					}
					payments = [];
					for(var user of users){
						payments.push({payment_user: user, payment_role: role, value: 0});
					}
					Payment.create(payments).exec((err, created_payments) => {
						console.log(created_payments);
						if(err){
							res.status(400);
							return res.send("Error creating payment: " + err);
						}
						return res.send("Inserted");
					});
				});
			});

		});





	}
};
