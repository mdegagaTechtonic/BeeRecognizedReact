const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Recognition = require('../models/Recognition');

const router = express.Router();

router.use(bodyParser.json({ extended: true, limit: '5mb' }));

router.post('/', function (req, res, next) {
  // Uses the Mongoose create method on your model.
  const recognition = new Recognition({
      _id: mongoose.Types.ObjectId(),
      date : Date.now(),
      message: req.body.message
  });
  recognition
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
    // (err, book) => {
    //   if (err) return res.status(500).send("There was a problem adding the information to the database!");
    res.status(200).json({
      message: 'handling POST request to /recognition',
      createdRecognition: recognition
    })
    // }
  // );
});

router.get('/', function (req, res) {//get all sent

})

router.get('/', function (req, res) {//get last 5 received

})

module.exports = router;
