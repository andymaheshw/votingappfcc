const mongoose = require('mongoose');


const votingSchema = new mongoose.Schema({
  options:[{option: String, votes: Number}],
  title: String,
  userName: String
});


const Voting = mongoose.model('voting', votingSchema);

module.exports = Voting;