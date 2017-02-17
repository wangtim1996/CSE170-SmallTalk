var data = require("../data.json");

exports.addEntry = function(req, res) {
	// Your code goes here
  var date = new Date().getTime();
  var title = req.query.title;
  var log = req.query.log;

  var entry = {
    "date" : date,
    "title" : title,
    "desc" : log
  };
  console.log(entry);
  data.entries.push(entry);
  res.redirect('/index');
}
