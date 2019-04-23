var friends = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res){
    return res.json(friends);
  });

  app.post('/api/friends', function(req, res) {
    var surveyResults = req.body;

    console.log(surveyResults);

    friends.push(surveyResults);
    res.json(surveyResults);
  });
}