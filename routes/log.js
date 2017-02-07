exports.view = function(req, res){
  var date = req.params.date;
  res.render('log', {
    'logDate' : date
  });
};
