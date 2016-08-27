/*jshint esversion: 6 */

/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: (req, res) => {
		console.log(req.param('coordinator'));
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
			Role.create(obj).exec((err, records) => {
				if(err){
					res.status(400);
					return res.send("Error creating role: " + err);
				}

				payments = [];
				for(member of obj.members){
					
				}
			});

		});





	}
};
