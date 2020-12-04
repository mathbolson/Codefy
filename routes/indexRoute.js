var router = require('express').Router();
var usercollection = require("../models/usercollection")

// router.get('/hiii', function(req, res) {
//   var db = req.db;
//   var collection = db.get('usercollection');
//   collection.find( {}, {}, function(e, docs) {
//     if (e) {
//       console.log(e);
//     } else {
//       res.json(docs);
//     }
//   });
// });

router.route('/getList').get((req, res) => {
  usercollection.find ()
  .then(usercollection => res.json(usercollection))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post ((req, res) => {
  const question = req.body.question;
  const answer = req.body.answer;

  const newUsercollection = new usercollection({
    question,
    answer,

  });

  newUsercollection.save()
  .then(() => res.json('Collection added!'))
  .catrch(err => res.status(400).json('Error: '+ err));

});
module.exports = router;


// router.route('/add').post((req, res) => {
//   const question = req.body.question;
//   const answer = req.body.answer;
//   var collection = db.get('usercollection');

//   // Submit to the DB
//   collection.insert({
//       "question" : question,
//       "answer" : answer
//   }, function (err, doc) {
//       if (err) {
//           // If it failed, return error
//           res.send("There was a problem adding the information to the database.");
//       }
//       else {
//           // And forward to success page
//           res.redirect("profile");
//       }
//   });
// });

// router.get('/getAnswers', function(req, res) {

//   let db = req.db;
//   var collection = db.get('usercollection');

//   collection.find( {}, {}, function(e, docs) {
//     if (e) {
//       console.log(e);
//     } else {
//       res.json(docs);
//     }
//   });

// });

// router.get('/', function(req, res) {
//     var db = req.db;
//     var collection = db.get('usercollection');
//     collection.find({},{},function(e,docs){
//         res.render('userlist', {
//             "userlist" : docs
//         });
//     });
// });

// /* GET New User page. */
// router.get('/newuser', function(req, res) {
//   res.render('newuser', { title: 'Add New User' });
// });

// /* POST to Add User Service */
// router.post('/adduser', function(req, res) {

//   // Set our internal DB variable
//   var db = req.db;

//   // Get our form values. These rely on the "name" attributes
//   var question = req.body.question;
//   var answer = req.body.answer;

//   // Set our collection
//   var collection = db.get('usercollection');

//   // Submit to the DB
//   collection.insert({
//       "question" : question,
//       "answer" : answer
//   }, function (err, doc) {
//       if (err) {
//           // If it failed, return error
//           res.send("There was a problem adding the information to the database.");
//       }
//       else {
//           // And forward to success page
//           res.redirect("userlist");
//       }
//   });

// });

// router.get('/newuser', function(req, res) {
//   res.render('newuser', { title: 'Add New User' });
// });

// // get answer
// router.get('/getAnswers', function(req, res) {

//   let db = req.db;
//   var collection = db.get('usercollection');

//   collection.find( {}, {}, function(e, docs) {
//     if (e) {
//       console.log(e);
//     } else {
//       res.json(docs);
//     }
//   });

// });
