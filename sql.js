var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST || 'localhost',
  user     : process.env.DB_USER || 'root',
  password : process.env.DB_PASS || '',
  database : 'walkout'
});
connection.connect(function(err) {
  if(err) throw err;
  console.log("Database connected");
});

module.exports = connection;
