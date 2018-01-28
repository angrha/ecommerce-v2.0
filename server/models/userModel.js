const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    require: [true, `can't be empty`]
  },
  last_name: {
    type: String,
    require: [true, `can't be empty`]
  },
  username: {
    type: String,
    require: [true, `can't be empty`]
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: {
      validator: function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      message: `{VALUE} is not a valid Email`
    },
    require: [true, `can't be empty`],
  },
  password : {
    type:String,
    required: [true, `can't be empty`]
  },
  address: String,
  contact: String,
  status:  {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User