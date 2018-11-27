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

module.exports = router;
