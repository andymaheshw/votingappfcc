 const mongoose = require('mongoose');
 const Voting = require('../models/Voting');


 exports.getmakePoll = (req, res) => {

 	  Voting.find({}, function(err, polls) {
    var pollsMap = {};

    polls.forEach(function(poll) {
      pollsMap[poll.title] = poll.options;
    });
    console.log(pollsMap);
  });
 	//console.log(Voting.collection);
  res.render('makepoll', {
    title: 'API Examples'
  });
};


 exports.postmakePoll = (req, res) => {
 	console.log(req.body.hasOwnProperty("Option_3"));
 	console.log(req.body, "req body");
 	console.log(req.body.title);
 	console.log(req.body.Option_2);
 	let ls = []
 	let i = 1
 	while (req.body.hasOwnProperty("Option_"+i))
 	{
 		ls.push({option: req.body["Option_"+i], votes: 0})
 		i += 1
 	}

 	var poll = new Voting({ username: "andymaheshw", 
 	options: ls,
 	title: req.body.title });
 	poll.save();

  res.render('makepoll', {
    title: 'API Examples'
  });
};

exports.getshowPoll = (req, res) => {
	console.log(req.params.id)
	Voting.find({ _id: req.params.id}, function(err, poll) {
		console.log(poll[0])
			res.render('showpoll', {'poll': poll[0]	
	})
	})

}