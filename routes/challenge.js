exports.view = function(req, res){
  var challenges = Array(
    'School',
    'Hobbies',
    'Sports',
    'Act Insane',
    'IDK, Figure it out yourself',
    'Bad Pickup Lines'
  );
  var challenge = challenges[Math.floor(Math.random()*challenges.length)];

  res.render('challenge',{
    'challenge' : challenge
  });
};
