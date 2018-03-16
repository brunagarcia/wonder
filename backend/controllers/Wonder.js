/** 
 *  @file:  Posts.js
 *  @desc:  A controller for interacting with the Wonder database.
 */

//Import the models
const Post = require('../models/Post')
// const User = require('../models/User')

const Wonder = {
  //Get all the Posts from the database
  getAllPosts: (callback) => {
    Post.find({})
    .then(posts => {
      callback(posts)
    })
  },

  //Add a new post to Wonder
  addPost: ({user_id, title, body, date, type}, callback) => {
    Post({
      user_id,
      title,
      body,
      date,
      type
    }).save()
      .then(post => {
        callback(post)
      })
  }
}

module.exports = Wonder