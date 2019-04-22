var matches = require('../data/friends');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(matches);
    });

    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        matches.push(userInput);

        res.json(matches);

    })

}