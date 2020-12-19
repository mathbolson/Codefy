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
const path = require('path')


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

app.use(express.static(path.join(__dirname, 'client/build')));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// ApiRoutes
const apiRoute = require("./routes");
//const indexRoute = require("./routes/indexRoute");

app.use(apiRoute);
//app.use('/Profile', indexRoute);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

