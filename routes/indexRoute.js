var router = require('express').Router();
var usercollection = require("../models/usercollection")


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

