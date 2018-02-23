require('dotenv').config();
sql = require('./sql');
var dbName = process.env.DB_NAME || 'walkout';
sql.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, function(err, data) {
  if  (err) throw err;
});
sql.query(`USE ${dbName}`, function(err, data) {
  if  (err) throw err;
});
sql.query(`DROP TABLE IF EXISTS \`attendees\``, function(err, data) {
  if (err) throw err;
})
sql.query(`CREATE TABLE \`attendees\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL UNIQUE, \`added\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`));`, function(err, data) {
  if  (err) throw err;
});
