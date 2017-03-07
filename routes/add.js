var data = require("../data.json");

exports.addEntry = function(req, res) {
	// Your code goes here
  var date = req.body.date;
  var title = req.body.title;
  var log = req.body.log;
  var challenge = req.body.challenge;
  var edit = false;

  var entry = {
    "date" : date,
    "title" : title,
    "desc" : log,
    "challenge" : challenge
  };

  for(var i = 0; i < data.entries.length; i++)
  {
    if(data.entries[i].date == date)
    {
      data.entries[i].date = date;
      data.entries[i].title = title;
      data.entries[i].desc = log;
      data.entries[i].challenge = challenge;
      edit = true;


      break;
    }
  }

  if(!edit)
  {
    console.log(entry);
    data.entries.push(entry);
  }

  res.redirect('/log/' + entry.date);
}
