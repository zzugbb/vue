/* eslint-disable no-console */
var mongoose = require("mongoose");

//配置mongoose
function connectMongoose(dbName) {
  //连接数据库
  mongoose.connect("mongodb://localhost:27017/" + dbName);
  
  const db = mongoose.connection;

  //如果连接成功会执行error回调
  db.once("error", function (error) {
    console.log("数据库 " + dbName + " 连接失败：" + error);
  });

  //如果连接成功会执行open回调
  db.once("open", function () {
    console.log("数据库 " + dbName + " 连接成功");
  });

  return mongoose;
}

module.exports = {
  "connectMongoose" : connectMongoose
}
