
  var data = {};
exports.view = function(req, res){
    data['alt'] = false;
    res.render('challenge',data);
     
  
    
};

exports.view2 = function(req, res){
    data['alt'] = true;
    res.render('challenge',data);
     
        
}; 
