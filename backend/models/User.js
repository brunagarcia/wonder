const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  hash: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User