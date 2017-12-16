require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  port = 3030,
  session = require("express-session"),
  passport = require("passport"),
  Auth0Strategy = require("passport-auth0"),
  massive = require("massive"),
  ctrl = require('./ctrl');

//   72C node files 
//   74C invoke express
const app = express();

// body parser 76F
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

// massive connection 70C
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.AUTH_CLIENTID,
      clientSecret: process.env.AUTH_CLIENTSECRET,
      callbackURL: process.env.AUTH_CALLBACK
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      const db = app.get("db");
      const userData = profile._json;

      query function 70K
      db.find_user([userData.identities[0].user_id]).then(user => {
        if (user[0]) {
          return done(null, user[0].id);
        } else {
          db
            .create_user([
              userData.name,
              userData.email,
              userData.picture,
              userData.identities[0].user_id
            ])
            .then(user => {
                return done(null, user[0].id);
            });
        }
      });
    }
  )
);
passport.serializeUser(function(id, done) {
  done(null, id);
});
passport.deserializeUser(function(id, done) {
    app.get('db').find_session_user([id]).then(user => {
        done(null, user[0]);
    })
});

app.get("/auth", passport.authenticate("auth0"));
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: process.env.AUTH_SUCCESS,
    failureRedirect: "/auth"
  })
);

app.get('/auth/me', (req, res)=> {
    if (req.user) {
        return res.status(200).send(req.user);
    } else {
        return res.status(401).send('Need to login.');
    }
})

app.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('http://localhost:3000/');
})

//ENPOINTS
app.get('/api/products', ctrl.read);

app.post('/api/products', ctrl.create);

app.delete('/api/products/:id', ctrl.delete);

app.put('/api/products/:id', ctrl.update);

app.listen(port, () => console.log(`listening on port ${port}`));