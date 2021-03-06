const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  avatar: {
    type: String,//path to image
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  beesToGive: {
    type: Number,
    trim: true,
    required: true,
  }
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');

// module.exports = mongoose.model('User', UserSchema);
