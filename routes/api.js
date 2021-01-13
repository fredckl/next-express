var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/about', function(req, res, next) {
  res.send({
    firstname: 'Frédéric',
    lastname: 'KOLLER',
    email: 'frederic.koller@fasst.io'
  });
});

module.exports = router;
