var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username:  {
      type: String,
      required: [true, "Username is required."],
      minlength: [3, "Username minimum characters is 3"]
    },
    password:  {
      type: String,
      required: [true, "password is required."],
      minlength: [3, "password minimum characters is 3"]
    }
}, { timestamp: true});

var User = mongoose.model('User', UserSchema);

module.exports = User;
