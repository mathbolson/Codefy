const User = require("../models/user");
const questionsAndAnswers = require("../models/usercollection");
const passport = require("passport");
const router = require("express").Router()
const bcrypt = require("bcryptjs");




router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
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
  
    // // Submit to the DB
    // questionsAndAnswers.insert({
    //     "question" : question,
    //     "answer" : answer
    // }, function (err, doc) {
    //     if (err) {
    //         // If it failed, return error
    //         res.send("There was a problem adding the information to the database.");
    //     }
    //     else {
    //         // And forward to success page
    //         //res.redirect("/");
    //     }
    // });

    const newAnswer = new questionsAndAnswers({
      "question" : question,
      "answer" : answer,
      "tag": tag
    });
    newAnswer.save();
    res.redirect("http://localhost:3000/profile");
  });
  
  router.get("/user", (req, res) => {
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

  router.put("/updateQuestionsAndAnswers"), (req, res) => {
    console.error("taggggggggg")
    var newObject = { 
      tag: req.body.tag
   }; 
  
   answers.update(req.params.id, newObject, function(err){
    if(err) { res.send(err);}
    res.json({messaje:'Done'});
  });

  }


  module.exports = router;
  