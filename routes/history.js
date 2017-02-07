exports.view = function(req, res){
  res.render('history', {
    'logs' : [
      { 'date': '20170125'
      },
      { 'date': '20170127'
      },
      { 'date': '20170201'
      },
      { 'date': '20170203'
      },
      { 'date': '20170204'
      },
      { 'date': '20170205'
      },
      { 'date': '20170208'
      },
      { 'date': '20170210'
      }


    ]
  });
};
