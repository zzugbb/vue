/* eslint-disable no-console */
var mongoose = require("mongoose");
var connectMongoose = require("../mongoose").connectMongoose
var db = connectMongoose("bill");

//定义一个 schema,描述此集合里有哪些字段，字段是什么类型
//只有schema中有的属性才能被保存到数据库中
var billSchema = new mongoose.Schema({
  desc : { type: String },
  type : { type: Number, default: 1 },
  money : { type: Number, default: 0},
  time : { type: Date, default: Date.now },
});

var billModel = db.model("bill", billSchema);

function saveBill(object, callback) {
  //根据模型创建实体，是指的个体对象
  var billEntity = new billModel(object);
  //用save 方法把自己保存到数据库中
  billEntity.save(function(error,doc) {
    if (error) {
      console.log("error :" + error);
    } else {
      console.log(doc);
      callback(doc);
    }
  });
}

function getBills(callback) {
  billModel.find( {'type': { "$gte": 0 }}, {money: 1, desc:1, type: 1, time: 1 }, function(err,docs){
    callback(docs);
  })
}

module.exports = {
  "saveBill" : saveBill, 
  "getBills" : getBills
}