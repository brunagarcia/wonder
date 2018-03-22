const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  comments:{ 
    type: [
      String
    ]
  },
  user_name: {
    type: String,
    // required: true,
  },
  user_email: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  type: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  vote: {
    type: Number,
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post