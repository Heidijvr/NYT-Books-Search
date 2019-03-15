const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

// Configure bodyParser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up the Promises with Mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect (
process.env.MONGODB_URI || "mongodb://localhost/nytbooks",
{
  useMongoclient: true
}
);

// DB
const db = require("./models");
const { Book } = db
console.log(Book);


// routes
app.post("/api/saved", (req, res) => {
  var book = req.body
  // get the posted object
  // console.log(book);
  // call Article.create
   // Then return some json (success|error)
  Book.create(book)
  .then(() => {
    res.json(book)
    })
  .catch((err) => {
    res.json(err)
    }) 
  });


app.get("*", function(req, res) {
  res.sendFile(path.join(dir_name, ".client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
