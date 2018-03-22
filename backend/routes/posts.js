/** 
 *  @file:  books.js
 *  @desc:  Routes for interacting with posts
*/

const router = require("express").Router();
const faker = require("faker");
//Import the router

//Import the Library contoller
const Wonder = require('../controllers/Wonder');

const Post = require('../models/Post');
const User = require('../models/User');

//Allowing cors access. 
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})


// Add end point - add a new post
router.post('/add', (req, res) => {
  console.log(req.body)
  const { comments ,user_name, user_email, title, body, date, type } = req.body
  Wonder.addPost({
    comments: faker.lorem.sentence(),
    user_name: faker.name.firstName(),
    user_email: faker.internet.email(),
    title: faker.random.words(),
    body: faker.lorem.paragraph(),
    date: new Date(),
    vote:0,
    type: "Code"
  }, (post) => {
    console.log(post)
    Wonder.getAllPosts((posts) => {
      res.send(posts)
    })
  })
  
})

router.get('/getfilterposts', (req, res) => {   
  console.log(req.query[0])
  Post.find({}).sort([['date', -1]])
  .then(object => {
    let container = []
    let newFilter = object.filter((post, i )=> {
      if (post.title.includes(req.query[0])){
        container.push(post)   
      }
    })
    res.json(container)
  })
  .catch(err => {
    console.log(err);
    res.status(400)
      .json({err});
  })
});



//Send Posts data to axios endpoint:
router.get('/getposts', (req, res) => {    
  Wonder.getAllPosts((posts) => {
    res.send(posts)
  })
})

//Send Posts data to axios endpoint:
router.get('/getuser', (req, res) => {    
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

  //Add user from Firebase to Database
  router.get('/adduser', (req, res) => {
    console.log(req.body)
    const { name, email } = req.body
    Wonder.addUser({
      name,
      email
    }, (user) => {
      res.json(user)
    })
})


module.exports = router

// app.get('/testing', (req, res) => {
//   //console.log(req.body)
//   const user = {
//     name: Faker.Name.findName(),
//     email: Faker.Internet.email(),
//     address: Faker.Address.streetAddress(),
//     bio: Faker.Lorem.sentence(),
//     image: Faker.Image.avatar()
//     };
//     res.json(user)
// })
