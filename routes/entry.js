var data = require("../data.json");

exports.view = function(req, res){
  var entryData = {};
  var d = new Date();
  entryData['header'] = "Write An Entry";
  entryData['date'] = d.getTime();
  entryData['readDate'] = d.toDateString();
  entryData['title'] = "";
  entryData['desc'] = "";
  entryData['challenge'] = req.body.challenge;
  res.render('entry', entryData);
};

exports.edit = function(req, res)
{
  console.log("EDITING");

  var date = req.params.date;
  var entryData;
  for(var i = 0; i < data.entries.length; i++)
  {
    if(data.entries[i].date == date)
    {
      entryData = data.entries[i];
      var epochSec = entryData.date;
      var newDate = new Date(parseInt(epochSec));
      var stringDate = newDate.toDateString();
      entryData['readDate'] = stringDate;
      break;
    }
  }

  entryData['header'] = "Edit An Entry";
  res.render('entry', entryData);
};
