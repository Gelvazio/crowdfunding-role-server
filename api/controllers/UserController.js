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
		Role.findOne({role_id: id}).populate('payments').exec((err, role) => {
			console.log(role);
			res.ok();
		})
	}
};
