/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();
var bill = require('../mongodb/schemas/bill')

router.get('/savebill', function(req, res, next) {
  let object = {
    "desc": "测试一下",
    "money": -50
  };
  bill.saveBill(object);
  res.send();
});


/* getbill */
router.get('/getbill', function(req, res, next) {
  bill.getBills( function(docs) {
    res.send(docs);
  })
});


module.exports = router;