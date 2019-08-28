var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./server/routes");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app); 

var server = app.listen(3000, function () {
    console.log("App running on port", server.address().port);
});