const mongoose = require("mongoose");

const answers = new mongoose.Schema({
  question: String,
  answer: String,
});

module.exports = mongoose.model("answers", answers);


