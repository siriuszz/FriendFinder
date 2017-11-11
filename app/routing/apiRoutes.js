// LOAD DATA
var friends = require("../data/friends");

// ROUTES
module.exports = function(app) {

    // GET REQUEST
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // POST REQUEST
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        res.json(true);
    });

};
