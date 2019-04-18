/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();
var bill = require('../mongodb/schemas/bill')

router.post('/savebill', function(req, res, next) {
  bill.saveBill(req.body, function(docs) {
    res.send(docs);
  });
});


/* getbill */
router.get('/getbills', function(req, res, next) {
  bill.getBills( function(docs) {
    res.send(docs);
  })
});


module.exports = router;