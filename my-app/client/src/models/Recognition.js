const mongoose = require('mongoose');

const RecognitionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // senderID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},//foreign key to sender
  // receiverID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},//foreign key to receiver
  date: Date,
  message: String,
});

module.exports = mongoose.model('Recognition', RecognitionSchema);
