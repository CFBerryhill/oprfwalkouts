var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST || 'localhost',
  user     : process.env.DB_USER || 'root',
  password : process.env.DB_PASS || ''
});
connection.connect(function(err) {
  if(err) throw err;
  console.log("MySQL connected");
});

function dbUse() {
  connection.query(`USE ${process.env.DB_NAME || 'walkout'}`, function(err, data) {
    switch((err) ? err.errno : -1) {
      case 1049:
      require('./reset');
      dbUse();
      break;
      case -1:
      console.log("Database connected");
      break;
      default:
      throw err;
    }
  });
}

dbUse();

module.exports = connection;
