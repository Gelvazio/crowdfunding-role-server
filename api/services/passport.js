var passport = require('passport'),
  FacebookStrategy = require('passport-facebook').Strategy;

function findById(id, fn) {
  User.findOne(id, function (err, user) {
    if (err) {
      return fn(null, null);
    } else {
      return fn(null, user);
    }
  });
}

function findByFacebookId(id, fn) {
  User.findOne({
    user_id: id
}, function (err, user) {
    if (err) {
      return fn(null, null);
    } else {
      return fn(null, user);
    }
  });
}

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new FacebookStrategy({
    clientID: "290802837960601",
    clientSecret: "60d89107edeebd4ddcf64823adfcbfdd",
    // callbackURL: "http://127.0.0.1:1337/user/facebook/callback"
    callbackURL: "http://ec2-52-32-23-74.us-west-2.compute.amazonaws.com:1337/user/facebook/callback"
  }, function (accessToken, refreshToken, profile, done) {

    findByFacebookId(profile.id, function (err, user) {
      console.log(profile);
      // Create a new User if it doesn't exist yet
      if (!user) {
        User.create({

          user_id: profile.id,
          name: profile.displayName

          // You can also add any other data you are getting back from Facebook here
          // as long as it is in your model

      }, function (err, user) {
          if (user) {
            return done(null, user, {
              message: 'Logged In Successfully'
            });
          } else {
            return done(err, null, {
              message: 'There was an error logging you in with Facebook'
            });
          }
        });

      // If there is already a user, return it
      } else {
        return done(null, user, {
          message: 'Logged In Successfully'
        });
      }
    });
  }
));
