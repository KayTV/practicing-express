var express = require('express'),
  app = express();

var vegetables = [
        "Carrots",
        "Cucumber",
        "Peas"
         ];

// WHEN a user goes to the homepage
app.get("/", function (req, res) {
  // THEN send back a response with "Hello World"
  res.send("Hello World");
});

// WHEN a user goes to http://localhost:3000/vegetables
app.get("/vegetables", function (req, res) {
  //THEN send back a response with the veggies
  res.send(vegetables.join(", "));
});

// WHEN a users goes to the /meaning-of-life path
app.get("/meaning-of-life", function (req, res) {
  // THEN send down a response with "42"
  res.send("42");
});

app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});
