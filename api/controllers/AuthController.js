passport = require("passport");

module.exports = {
  login: function(req, res) {
    token = req.param('access_token');
    console.log(token);
    passport.authenticate(token, function(error, user, info) {
        req.logIn(user, function (err) {
            if(err) {
                console.log("There was an error: " + err);
                req.session.flash = 'There was an error';
                res.redirect('user/login');
            } else {
                console.log("Facebook call");
                req.session.user = user;
                res.redirect('/user/dashboard');
            }
        });
      res.ok();
    })(req, res);
  },

  logout: function(req, res){
      req.session.user = null;
      res.ok();
  }
};
