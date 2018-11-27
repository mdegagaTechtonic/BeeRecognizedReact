const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Comment = require('../models/Comment');

const router = express.Router();

router.use(bodyParser.json({ extended: true, limit: '5mb' }));

router.post('/', function (req, res) {

})

router.get('/', function (req, res) {//get all sent

})

router.get('/', function (req, res) {//get last 5 received

})

router.put('/bees/replenish', function (req, res) {//replenish the bees
  let results = User.find({}, (err, users) => {
    if (err) return res.status(500).send("There was a problem grabbing the comments from the database.");
  });
  for (let i=0; i <= results.length; i++) {
    Comment.findOneAndUpdate({ _id: results._id }, { beesToGive: 5 }, (err, replenished) => {
      if (err) return res.status(500).send("There was a problem replenishing the bees in the database.");
    });
  }
});

module.exports = router;
