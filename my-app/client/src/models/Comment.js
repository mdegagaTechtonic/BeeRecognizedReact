const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  senderID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},//foreign key to sender
  receiverID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},//foreign key to receiver
  beesToGive: Number,
  Date: Date,
  Message: String,
});

module.exports = mongoose.model('Comment', CommentSchema);
