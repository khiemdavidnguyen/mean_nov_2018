var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
    type: String,
    default: '',
  },
  age: Number,
}, {timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;
