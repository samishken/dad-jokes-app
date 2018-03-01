// require all our ependencies
const express = require('express')
// create and set up our express app
const app = express()

// define a route
app.get('/', (req, res) => {
  res.send('hello world')
})

// start our server
app.listen(3000, () => console.log('This is working'))
