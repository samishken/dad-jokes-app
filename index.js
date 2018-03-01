// require all our dependencies
const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')
const Joke = require('./models/Joke')
const jokesController = require('./controllers/joke')

// create and set up our express app
const app = express()

// configure express to use hbs
app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }))
app.use(express.static('public'))

// Define our Routes:
app.get('/', (req, res) => {
  Joke.find({}).then(function (jokes) {
    res.render('index', { jokes })
  })
})

// app.get("/style.css", (req, res) => {
//   res.sendFile(__dirname + "/public/style.css");
// });

app.use('/jokes', jokesController)

// start our server
app.listen(3000, () => console.log('app is running'))
