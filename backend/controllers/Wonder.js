/** 
 *  @file:  Wonder.js
 *  @desc:  A controller for interacting with the Wonder database.
 */

//Import the models
const Post = require('../models/Post')
const User = require('../models/User')

const Wonder = {
  //Get all the Posts from the database
  getAllPosts: (callback) => {
    Post.find({})
    .then(posts => {
      callback(posts)
    })
  },

  //Add a new post to Wonder
  addPost: ({user_id, title, body, date, vote, type}, callback) => {
    Post({
      user_id,
      title,
      body,
      date,
      vote,
      type
    }).save()
      .then(post => {
        callback(post)
      })
  },

  //Get user from firebase
  addUser: ({name, email}, callback) => {
    User({
      name,
      email
      }).save()
        .then(user => {
          callback(user)
        })
  },
}


module.exports = Wonder