/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();
var admin = require('../mongodb/schemas/admin')

router.post('/', function(req, res, next) {
  admin.selectAdmin(req.body, function(docs) {
    res.send(docs);
  })
});



module.exports = router;