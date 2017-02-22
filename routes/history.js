var data = require('../data');

exports.view = function(req, res){
  //some kind of call to the database or something, oh wait, it's asynchronous
  //idk man.
  var processed = data;
  for(var i = 0; i < processed.entries.length; i++)
  {
    var entry = processed.entries[i];
    var epochSec = entry.date;
    var newDate = new Date(parseInt(epochSec));
    var stringDate = newDate.toDateString();
    entry['readDate'] = stringDate;
  }

  res.render('history', data);
};
