 const mongoose = require('mongoose');
 const Voting = require('../models/Voting');


 exports.getmakePoll = (req, res) => {
  res.render('makepoll', {
    title: 'API Examples'
  });
};


 exports.postmakePoll = (req, res) => {
 	console.log(req.body.title)
  res.render('makepoll', {
    title: 'API Examples'
  });
};

