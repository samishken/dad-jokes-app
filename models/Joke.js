// Import DB connection
const mongoose = require('../db/connection')
// defining the schema
// schema the structure of our data
// to be used to create our model
const JokeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  punchline: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

// 1st line create mongoose model by passing in the name
// of the model and the schema for the model
const Joke = mongoose.model('Joke', JokeSchema)
// exporting the Joke model
module.exports = Joke
