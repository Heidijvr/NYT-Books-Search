const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// Configure bodyParser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect (
process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
  // useMongoclient: true,
  useCreateIndex: true,
  useNewUrlParser: true
  }
);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
// // DB
// const db = require("./models");
// const { Book } = db
// console.log(Book);


// // routes
// app.post("/api/saved", (req, res) => {
//   var book = req.body
//   // get the posted object
//   // console.log(book);
//   // call Article.create
//    // Then return some json (success|error)
//   Book.create(book)
//   .then(() => {
//     res.json(book)
//     })
//   .catch((err) => {
//     res.json(err)
//     }) 
//   });


// app.get("*", function(req, res) {
//   res.sendFile(path.join(dir_name, ".client/build/index.html"));
// });

// Start the API server

