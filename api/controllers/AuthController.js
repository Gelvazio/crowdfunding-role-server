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
                res.status(500);
                return res.send("Server error when logging in");
            } else {
                console.log("Facebook call");
                req.session.user = user;
                res.ok();
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
