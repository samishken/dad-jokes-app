const express = require('express')
const router = express.Router()

// Define our routes
// get all jokes: '/'
router.post('/', (req, res) => {
    console.log(req.body)
})
// create new joke
// get new view for a new joke
router.get('/new')
 
router.get('/jokes/new', (req, res) => {
  res.send('hello from the other side')
})

//get a joke by it's id: '/:id'

//update a joke by it's id: '/:id'

//delete a joke by it's id: '/:id'
// export our router
module.exports = router
