var data = require('../data');

exports.view = function(req, res){
  var date = req.params.date;
  var entry;
  for(var i = 0; i < data.entries.length; i++)
  {
    if(data.entries[i].date == date)
    {
      entry = data.entries[i];
      var epochSec = entry.date;
      var newDate = new Date(parseInt(epochSec));
      var stringDate = newDate.toDateString();
      entry['readDate'] = stringDate;
      break;
    }
  }
  res.render('log', entry);
};
