// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var Reserve = require("./reservations.js")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// ------- GET & POST routes --------- //
app.get("/?", function(req, res){
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res){
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function(req, res){
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/table", function(req, res){
  res.json(req.body);
});

app.get("/api/waiting", function(req, res){
  res.json(req.body);
});

app.post("/reservation", function(req, res){
  res.send(req.body);
  console.log(req.body);
});

// ------- Listener ------------ //
app.listen(PORT, function(){
  console.log("Application listening on PORT " + PORT);
});
