var express = require('express');
var sql = require('../sql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  total = -1;
  sql.query('SELECT DISTINCT COUNT(email) AS total FROM attendees', function(err, data) {
    if (err) throw err;
    data = JSON.parse(JSON.stringify(data));
    total = data[0].total;
  });
  res.render('index', {
    attendees: total
  });
});

/* POST new attendee */
router.post('/new', function(req, res, next) {
  var email = req.body.email;
  if (!email) {
    var err = new Error('No email specified');
    err.status = 400;
    next(err);
  } else {
    sql.query('SELECT * FROM attendees WHERE email = ?', [email], function(err, data) {
      data = JSON.parse(JSON.stringify(data));
      if (data.length>0) {
        var err = new Error('Email already in use');
        err.satus = 400;
        next(err);
      } else {
        sql.query('INSERT INTO attendees (email) VALUES (?)', [email], function(err1, data2) {
        if (err1) throw err1;
          res.json({
            success: true
          });
        });
      }
    });
  }
});

module.exports = router;
