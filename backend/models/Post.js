const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user_id: {
    type: Number,
    required: true,
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
  },
  comments: {
    type: Array,
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post