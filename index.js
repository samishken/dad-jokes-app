// require all our ependencies
const express = require('express')
//require hbs
const hbs = require('hbs')
// create and set up our express app
const app = express()

//
app.set('view engine', 'hbs') 

//define a route
app.get('/', (req, res) => {
  res.render('index')
})

// // define a route test
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

// start our server
app.listen(3000, () => console.log('This is working'))
