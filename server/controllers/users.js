var session = require('express-session'),
    User = require('../models/user');

module.exports = {
  create: (req, res) => {
    let newUser = new User(req.body);

    User.findOne({username: newUser.username}, (err, user) => {
      // if exists
      // user === {"username": "myname" }
      if (user){
        if (user.password == newUser.password){
          session.user_id = user._id;
          return res.json(user);
        }

        console.log("wong username/password");
        return res.status(400).json(err);
      }
      //does not exist
      // user === null
      newUser.save( (err) =>{
        if (err){
          return res.json();
        }

        session.user_id = newUser._id;

        return res.json(newUser);
      });

    });
  }
}
