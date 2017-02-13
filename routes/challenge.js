exports.view = function(req, res){
  var challenges = Array(
    'Say hi to a random stranger.',
    'Ask a stranger a question.',
    'Complement a boy',
    'Act insane in front of people',
    'IDK, Figure it out yourself',
    'Complement a girl'
  );
  var challenge = challenges[Math.floor(Math.random()*challenges.length)];

  res.render('challenge',{
    'challenge' : challenge
  });
};
