/**
 * GET /
 * Home page.
 */
 const mongoose = require('mongoose');
 const Voting = require('../models/Voting');


exports.index = (req, res) => {
  Voting.find({}, function(err, voting) {
  	 var votingMap = [];

  	voting.forEach(function(voting) {
      votingMap.push({"title": voting.title, "id": voting._id});
    });
    console.log("votingMap", votingMap)
  res.render('home', {
    title: 'Home', 
    voting: votingMap
  });
});
};
