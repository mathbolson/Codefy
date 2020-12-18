const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
// const dotenv = require("dotenv");


const PORT = process.env.PORT || 4000;
//----------------------------------------- END OF IMPORTS---------------------------------------------------
// 
mongoose.connect(
  "mongodb+srv://mathbolson:odeiocmb@cluster0.gyhca.mongodb.net/codefy?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose is Connected to Codefy");
  }
);

// mongoose.connect(`mongodb://${process.env.DB_NAME}:${process.env.DB_PASS}@ds241658.mlab.com:41658/codefy`,\

// dotenv.config()
// const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@coding-blog-t0xf0.mongodb.net/<codefy>`


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
//const indexRoute = require("./routes/indexRoute");

app.use(apiRoute);
//app.use('/Profile', indexRoute);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

