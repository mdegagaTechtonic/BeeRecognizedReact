const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/User');
const router = express.Router();

router.put('/bees/replenish', function (req, res) {//replenish the bees
  let results = User.find({}, (err, users) => {
    if (err) return res.status(500).send("There was a problem grabbing the comments from the database.");
  });
  for (let i=0; i <= results.length; i++) {
    User.findOneAndUpdate({ _id: results._id }, { beesToGive: 5 }, (err, replenished) => {
      if (err) return res.status(500).send("There was a problem replenishing the bees in the database.");
    });
  }
});

module.exports = router;
