/**
 * PaymentController
 *
 * @description :: Server-side logic for managing payments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	setPayment: function(req, res){
		user = req.session.user;
		paypal_account = req.param('email');
		amount = req.param('amount');
		role_id = req.param('role_id');

		console.log(user);
		Role.findOne({role_id: role_id}).exec((err, role) => {
			console.log(role);
			Payment.update({payment_role: role.id, payment_user: user.id}, {value: amount}).exec((err, updated) => {
				if(err){
					res.status = 400;
					return res.send("Error updating payment");
				}
				res.send("updated");
			});
		});

	}
};
