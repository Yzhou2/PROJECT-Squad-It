const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth = require('passport-auth0');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const config = require('./server/config')
const massive = require('massive');
const controller = require('./server/controllers/controllers');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const s3Controller = require('./server/controllers/s3Controller');
const connectionString = config.address;


var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
  // 'Access-Control-Allow-Origin': '*'

 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

io.on('connection', function(socket){
  console.log('a user connected, yayyyy');

socket.on('notification', function(val){
  console.log('notification!!!!!!!', val)
  io.emit('new-notification', val);
  console.log('notification emit ran!!!')
})


  socket.on('message', function(message){
    console.log('received msg', message)
    io.emit('receive-msg', message);
  })
});




app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session({
  secret:'dsadsfgdsdfsdffghio',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/s3', require('react-dropzone-s3-uploader/s3router')({
  bucket: 'squadit',                           // required
  headers: {'Access-Control-Allow-Origin': '*'},  // optional
  ACL: 'private',                                 // this is the default - set to `public-read` to let anyone view uploads
}));





massive( connectionString ).then( db => {
  app.set('db', db)

  passport.use(new Auth({
    domain: config.domain,
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: 'http://localhost:3001/auth/callback'
  }, function(accessToken, refreshToken, extraParams, profile, done){
    //db find and create user
    // console.log(profile);
    db.getUserByAuthId([profile.id]).then(function(user) {
      //  console.log(user, 'hihihihihihihi')

        user = user[0];
        if (!user) { //if there isn't one, we'll create one!
          console.log('CREATING USER', profile);
          db.createUserByAuthID([profile.name.givenName, profile.name.familyName, profile.id, profile.emails[0].value]).then(function(createdUser) {
            console.log('USER CREATED', createdUser);
            return done(null, createdUser[0]); // GOES TO SERIALIZE USER
          }).catch( (err) => console.log(err) )
        } else { //when we find the user, return it
          console.log('FOUND USER', user);
          return done(null, user);
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
  app.get('/auth/callback', passport.authenticate('auth0', {successRedirect:'http://localhost:3000/logged/dashboard'}));
  app.get('/me', function(req, res){
    // console.log(req.user,'this is req.user')
    res.send(req.user)
  });
  // app.get('/api/profileImg', controller.getPic);
  app.get('/api/me', controller.getMyProfile);
  app.get('/api/user/:userid', controller.getUserProfile);
  app.put('/api/editprofile', controller.updateProfile);
  app.post('/api/createTrip', controller.createTrip)
  app.get('/api/viewTrip', controller.viewTrip)
  app.post('/api/squad', controller.CreateSquad);
  app.get('/api/squadInfo', controller.displaySquadInfo);
  app.put('/api/updateSquad', controller.updateCurrentSquad);
  app.get('/api/getPastSquad', controller.getPastSquad);
  app.delete('/api/removeTrip/:id', controller.removeTrip);
  app.delete('/api/removeSquad/:id', controller.removeSquad);
  app.put('/api/editTrip', controller.editTrip);
  app.get('/api/viewMessages/:id', controller.viewMessages);
  app.get('/api/getUserByDest/:dest', controller.getUserByDest);
  app.post('/api/addSquadMember', controller.addSquadMember);
  app.post('/api/getSquadMembers/:squad_id', controller.getSquadMembers);
  app.get('/api/getUserByHostStat/:dest', controller.getUserByHostStat);
  app.post('/api/getSignedURL', s3Controller.getSignedURL);
  app.post('/api/uploadPic', (req,res) => {
   const db = req.app.get('db');
   const {picurl} = req.body;
   db.insertPicUrl([picurl, req.user.userid]).then(
     url => res.status(200).send(url)
   )
 });
  app.post('/api/postReviews', controller.postReviews);
  app.get('/api/getMyReviews', controller.getMyReviews);
  app.get('/api/getReviews/:id', controller.getReviews);
  app.post('/api/postBktList', controller.postBktList);
  app.get('/api/getBktList/:squad_id', controller.getBktList);
  app.get('/api/getBktListByUser', controller.getBktListByUser);
  app.get('/api/addBktListStars/:bucketlist_id', controller.addBktListStars);


  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  server.listen(3001, ()=>{
    console.log('im listening on port 3001')
  })
});
