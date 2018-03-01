const express = require('express')
const router = express.Router()
const Joke = require('../models/Joke')

// Define our routes
// get all jokes: '/'
router.post('/', (req, res) => {
  console.log(req.body)
})
// create new joke
router.post('/', (req, res) => {
  Joke.create(req.boy).then(joke => {
    res.redirect(`/jokes/${joke.id}`)
  })
})
// get new view for a new joke
router.get('/new', (req, res) => {
    res.render('joke/new')
})

// get a joke by it's id: '/:id'
router.get('/:id', (req, res) => {
  Joke.findOne({ _id: req.params.id }).then(joke => {
    res.render('joke/show', joke)
  })
})

// update a joke by it's id: '/:id'
// delete a joke by it's id: '/:id'



// export our router
module.exports = router
