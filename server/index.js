require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const productsController = require("./productsController");
const {
  AUTH_DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  SESSION_SECRET,
  PORT,
  CONNECTION_STRING
} = process.env;

const app = express();

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

app.use(json());
app.use(cors());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//   new Auth0Strategy(
//     {
//       domain: AUTH_DOMAIN,
//       clientSecret: CLIENT_SECRET,
//       clientID: CLIENT_ID,
//       callbackURL: "/login"
//     },
//     (accessToken, refreshToken, extraParams, profile, done) => {
//       app
//         .get("db")
//         .getUserByAuthid(profile.id)
//         .then(response => {
//           if (!response[0]) {
//             app
//               .get("db")
//               .createUserByAuthid([profile.id, profile.displayName])
//               .then(created => {
//                 return done(null, created[0]);
//               });
//           } else {
//             return done(null, response[0]);
//           }
//         });
//       return done(null, profile);
//     }
//   )
// );

// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));

// app.get(
//   "/login",
//   passport.authenticate("auth0", {
//     successRedirect: "http://localhost:3000/",
//     failureRedirect: "http://localhost:3000/login"
//   })
// );

// app.get("/api/me", (req, res, next) => {
//   if (req.user) res.json(req.user);
//   else res.redirect("/login");
// });

// app.get("/api/test", (req, res) => {
//   const db = req.app.get("db");

//   db.users
//     .find({})
//     .then(response => {
//       res.json(response);
//     })
//     .catch(console.log);
// });

app.listen(PORT || 3001, () => {
  console.log(`App listening on port ${PORT || 3001}!`);
});
