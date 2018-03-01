// require all our ependencies
const express = require('express')
// require hbs
const hbs = require('hbs')

const Joke = require('./models/Joke')
const parser = require('body-parser')
const jokesController = require('./controllers/joke')

// create and set up our express app
const app = express()
//
app.set('view engine', 'hbs')
app.use(parser.urlencoded({extended: true}))

// connects with seed.js
app.get('/', (req, res) => {
  Joke.find({}).then(jokes => {
    res.render('index', { jokes } )
  })
})

// define a route
app.get('/', (req, res) => {
  res.render('index')
})

app.use(jokesController)

// // define a route test
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

// start our server
app.listen(3000, () => console.log('This is working'))
