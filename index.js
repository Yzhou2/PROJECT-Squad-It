const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth = require('passport-auth0');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const keys = require('./server/keys')
const massive = require('massive');
const controller = require('./server/controllers/controllers');

const connectionString = keys.address;

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session({
  secret:'dsadsfgdsdfsdffghio',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());




massive( connectionString ).then( db => {
  app.set('db', db)

  passport.use(new Auth({
    domain: keys.domain,
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: 'http://localhost:3001/auth/callback'
  }, function(accessToken, refreshToken, extraParams, profile, done){
    //db find and create user
    // console.log(profile);
    db.getUserByAuthId([profile.id]).then(function(user, err) {
      //  console.log(user, 'hihihihihihihi')
        user = user[0];
        if (!user) { //if there isn't one, we'll create one!
          console.log('CREATING USER', profile);
          db.createUserByAuthID([profile.name.givenName, profile.name.familyName, profile.id, profile.emails[0].value]).then(function(user,err) {
            console.log('USER CREATED', user);
            return done(err, user); // GOES TO SERIALIZE USER
          })
        } else { //when we find the user, return it
          console.log('FOUND USER', user);
          return done(err, user);
        }
      })
    }
  ));

  passport.serializeUser(function(profileToSession, done) {
    console.log('serialize');
    done(null, profileToSession);//puts argument on session
  });

  passport.deserializeUser(function(profileFromSession, done) {
    console.log('deserializeUser');
    done(null, profileFromSession);//obj is value from session
  });

  app.get('/auth', passport.authenticate('auth0'));
  app.get('/auth/callback', passport.authenticate('auth0', {successRedirect:'http://localhost:3000/dashboard'}));
  app.get('/me', function(req, res){
    res.send(req.user)
  });
  // app.get('/api/profileImg', controller.getPic);
  app.get('/api/user', controller.getUserProfile);
  app.put('/api/editprofile', controller.updateProfile);
  app.post('/api/squad', controller.CreateSquad)

  app.listen(3001, ()=>{

    console.log('im listening on port 3001')
  })
});
