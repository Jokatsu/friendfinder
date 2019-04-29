var matches = require('../data/friends');
var path = require("path");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(matches);
    });

    app.post("/api/friends", function (req, res) {

        var input = req.body;
        var inputScores = input.scores;
        var totalDiff;

        var matchedFriend = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        for (var i = 0; i < matches.length; i++) {
            var currentFriend = matches[i];
            totalDiff = 0;

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = inputScores[j];

                totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            if (totalDiff <= matchedFriend.friendDifference) {
                matchedFriend.name = currentFriend.name;
                matchedFriend.photo = currentFriend.photo;
                matchedFriend.friendDifference = totalDiff;
            }
        }
        matches.push(input);
        console.log(matchedFriend);
        res.json(matchedFriend);
    })



}





