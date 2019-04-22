var path = require("path");

module.exports = function (app) {


  app.get("/css/style.css", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/css/style.css"));

  });
  app.get("/css/reset.css", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/css/reset.css"));

  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));    
  });
  
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
}