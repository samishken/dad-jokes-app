// importing mongoose library
// connect to mongo using mongoose
const mongoose = require('mongoose')

// set up our connection
// using a connection string "mongodb://localhost" URL server running on our host
mongoose.connect('mongodb://localhost/dad_jokes')               // for home work use yum instead of todo

// native promise library give mongoose a promise library to use
mongoose.Promise = Promise

// mongoose connected to database line 6
// export the mongoose object with db connection  // what are we exporting
module.exports = mongoose
