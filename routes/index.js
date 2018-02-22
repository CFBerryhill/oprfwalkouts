var express = require('express');
var sql = require('../sql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  sql.query('SELECT DISTINCT COUNT(email) AS total FROM attendees', function(err, data) {
    switch(err ? err.errno : -1) {
      case -1:
      data = JSON.parse(JSON.stringify(data));
      var total = data[0].total;
      res.render('index', {
        attendees: total
      });
      break;
      default:
      next(err);
    }
  });
});

/* POST new attendee */
router.post('/new', function(req, res, next) {
  sql.query('INSERT INTO attendees (email) VALUES (?)', [req.body.email || null], function(err, data) {
    switch(err ? err.errno : -1) {
      case 1062:
      var err = new Error('Email already in use');
      err.satus = 400;
      next(err);
      break;
      case 1048:
      var err = new Error('No email specified');
      err.satus = 400;
      next(err);
      break;
      case -1:
      res.json({
        success: true
      });
      break;
      default:
      next(err);
    }
  });
});

module.exports = router;
