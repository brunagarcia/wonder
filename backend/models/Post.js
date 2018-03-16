const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user_id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    // required: false,
  },
  body: {
    type: String,
    // required: false,
  },
  type: {
    type: String,
    // required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  comments: {
    type: Array,
    // required: false,
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post