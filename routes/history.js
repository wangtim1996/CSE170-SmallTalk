var data = require('../data');

exports.view = function(req, res){
  //some kind of call to the database or something, oh wait, it's asynchronous
  //idk man.
  res.render('history', data);
};
