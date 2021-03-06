const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require('dotenv').config();


const PORT = process.env.PORT || 4000;
//----------------------------------------- END OF IMPORTS---------------------------------------------------


mongoose.connect(
  process.env.MONGODB_URI,
  {
    user:process.env.DB_USER,
    pass:process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose is Connected to Codefy");
  }
);



// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./Config/passportConfig")(passport);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// ApiRoutes
const apiRoute = require("./routes");


app.use(apiRoute);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

