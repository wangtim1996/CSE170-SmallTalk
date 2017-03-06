exports.view = function(req, res){
  console.log(req);
  var data = {};
  console.log(req.body);
  data['challenge'] = req.body.challenge;
  res.render('complete', data);
};
