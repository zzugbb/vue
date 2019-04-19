/* eslint-disable no-console */
var mongoose = require("mongoose");

//配置mongoose, 这里采用 createConnection 是因为需要连接多个数据库
function connectMongoose(dbName) {
  var db = mongoose.createConnection('mongodb://localhost:27017/' + dbName);

  //如果连接失败会执行error回调
  db.once("error", function (error) {
    console.log("数据库 " + dbName + " 连接失败：" + error);
  });

  //如果连接成功会执行open回调
  db.once("open", function () {
    console.log("数据库 " + dbName + " 连接成功");
  });

  return db;
}


// 配置mongoose, connect 只能连接一个数据库
// function connectMongoose(dbName) {
//   //连接数据库
//   mongoose.connect("mongodb://localhost:27017/" + dbName);
  
//   const db = mongoose.connection;

//   //如果连接失败会执行error回调
//   db.once("error", function (error) {
//     console.log("数据库 " + dbName + " 连接失败：" + error);
//   });

//   //如果连接成功会执行open回调
//   db.once("open", function () {
//     console.log("数据库 " + dbName + " 连接成功");
//   });

//   return mongoose;
// }

module.exports = {
  "connectMongoose" : connectMongoose
}
