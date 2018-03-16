/** 
 *  @file:  books.js
 *  @desc:  Routes for interacting with posts
*/

const router = require("express").Router();
//Import the router

//Import the Library contoller
const Wonder = require('../controllers/Wonder');

const Post = require('../models/Post');

//Allowing cors access. 
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})


// Add end point - add a new book
router.post('/add', (req, res) => {
  console.log(req.body)
  const { user_id, title, body, date, type } = req.body
  Wonder.addPost({
    user_id,
    title,
    body,
    date: new Date(),
    type
  }, (post) => {
    res.json(post)
  })
})

//Send Posts data to axios endpoint:
router.get('/getposts', (req, res) => {    
  Wonder.getAllPosts((posts) => {
    res.send(posts)
  })
})

//Get individual post from Database based on id.
router.get('/listposts/:objectId', (req,res) => {
  // console.log(req.params.objectId)
	Post.findOne({"_id":req.params.objectId})
		.then(object => {
			res.json(object);
		})
		.catch(err => {
			console.log(err);
			res.json(400)
				.json({err});
		})
});


module.exports = router