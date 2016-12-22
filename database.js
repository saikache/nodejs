var mysql = require('mysql');

console.log('***************************************************************************');
console.log('CHANGE mysql USERNAMES AND PASSWORD IN database.js', 'CHANGE DB NAME.... TABLE ect.');
console.log('***************************************************************************');

// connection.end();

function dbConnection() {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'bitcoinold_development'
  });
  connection.connect();
  this.connect = function() {
    return connection;
  }
}

module.exports = new dbConnection().connect();
