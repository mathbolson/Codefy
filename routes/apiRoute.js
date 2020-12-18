const User = require("../models/user");
const questionsAndAnswers = require("../models/usercollection");
const passport = require("passport");
const router = require("express").Router()
const bcrypt = require("bcryptjs");




router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) {res.sendStatus(403)}
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.json(req.user);
          console.log(req.user);
        });
      }
    })(req, res, next);
  });
  
  router.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  });

  router.post('/addQuestion', function(req, res) {
  
    // Get our form values. These rely on the "question" attributes
    var question = req.body.question;
    var answer = req.body.answer;
    var tag = req.body.tag;

    console.log(question)
    console.log(answer)
  

    const newAnswer = new questionsAndAnswers({
      "question" : question,
      "answer" : answer,
      "tag": tag
    });
    newAnswer.save();
    res.redirect("/profile");
  });
  
  router.get("/user", (req, res) => {
    res.send(req.user);
  });

  //Diogo
  router.get("/logout", (req, res) => {
    req.logout()
    res.send(req.user);
  });

  //route to awnsers
  
  
  router.get("/questionsAndAnswers", (req, res) => {

    questionsAndAnswers.find( {}, {}, function(e, docs) {
      if (e) {
        console.log(e);
      } else {
        res.json(docs);
      }
    });
  });

  router.get("/getSpecificQuestion", (req, res) => {
   
    // questionsAndAnswers.findOne(
    //   { question: "Make a forLoop of anything" }
    // )

    questionsAndAnswers.findOne({question: "Make a forLoop of anything"}, function(err, document) {
      console.log(document);
    });


  });

  router.put("/updateQuestionsAndAnswers", (req, res) => {

    var myquery = {"question": req.body.question}
    var newvalues = { $set: {tag: req.body.tag } };
    questionsAndAnswers.updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });

  });

  module.exports = router;