/* eslint-disable no-console */
var mongoose = require("mongoose");
var connectMongoose = require("../mongoose").connectMongoose
var db = connectMongoose("admin");

//定义一个 schema,描述此集合里有哪些字段，字段是什么类型
//只有schema中有的属性才能被保存到数据库中
var adminSchema = new mongoose.Schema({
  account : { type: String },
  password : { type: String },
  time : { type: Date, default: Date.now },
});

var adminModel = db.model("person", adminSchema);

function selectAdmin(data, callback) {
  adminModel.find({
      'account':  {"$gte": data.account, "$lte": data.account},
      'password':  {"$gte": data.password, "$lte": data.password}
    }, 
    {account: 1, password: 1}, 
    function(err,docs) {
      callback(docs);
  })
}

module.exports = {
  "selectAdmin" : selectAdmin
}