// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS
var app = express();

// Set an initial port
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
