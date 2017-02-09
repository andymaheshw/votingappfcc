/**
 * GET /
 * Home page.
 */
 const mongoose = require('mongoose');
 const Voting = require('../models/Voting');


exports.index = (req, res) => {
  Voting.find({}, function(err, voting) {
  	 var votingMap = {};


  	voting.forEach(function(voting) {
      votingMap[voting._id] = voting.title;
    });
    console.log(votingMap)
  res.render('home', {
    title: 'Home'
  });
});
};
