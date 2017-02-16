var data = require('../data');

exports.view = function(req, res){
  var date = req.params.date;
  var entry;
  for(var i = 0; i < data.entries.length; i++)
  {
    if(data.entries[i].date == date)
    {
      entry = data.entries[i];
      break;
    }
  }
  res.render('log', entry);
};
