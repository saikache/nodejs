var express = require('express');
var router = express.Router();
dbConnection = require('./../database')

router.get('/myapi', function(req, res) {
  // res.send('Just a test');
  dbConnection.query( 'SELECT * FROM users', function(err, rows) {
    res.render('api', { title: 'My', users: rows });  
    // console.log(rows)
    });
});

router.post('/myapi', function(req, res) {
  console.log(req.body.name);
  console.log(req.body.password);

  // var query = dbConnection.query('INSERT INTO posts SET ?', post, function(err, result) {
  //   // Neat!
  // });
  
  // https://github.com/mysqljs/mysql
  
  dbConnection.query( "INSERT INTO users (name) VALUES ("+ req.body.name +");", function(err, rows) {
    //  NOT WORKING .....
  });

  res.redirect('/api/myapi');
});


module.exports = router;
