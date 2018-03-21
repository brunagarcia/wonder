/** 
 *  @file:  server.js
 *  @desc:  Definition of our Express App
*/

const connection = require('./init/connect')

//Import Express and Middleware
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Faker = require("Faker")

//Import a route
const posts = require('./routes/posts')

//Middleware for parsing request body
app.use(bodyParser.json())

//Books end point using the books router
app.use('/', posts)

app.listen(8080, () => {
  console.log("listening on 8080")
})

//Export the app
module.exports = app
