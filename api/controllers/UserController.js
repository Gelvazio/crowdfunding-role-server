/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

passport = require("passport");

module.exports = {

	getByRole: function(req, res){
		role_id = req.param('id');
		user_ids = [];
		Role.findOne({role_id: role_id}).populate('payments').exec((err, role) => {
			user_ids.push(role.coordinator);
			for(var payment of role.payments){
				user_ids.push(payment.payment_user);
			}
			console.log(user_ids);
			User.find({id: user_ids}).exec((err, users) => {
				console.log(users);
				res.ok();
			})
		})
	}
};
