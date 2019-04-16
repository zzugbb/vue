/* eslint-disable no-console */
var mongoose = require("mongoose");

//配置mongoose
function connectMongoose(dbName) {
  //连接数据库
  mongoose.connect("mongodb://localhost:27017/" + dbName);

  //如果连接成功会执行error回调
  mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
  });

  //如果连接成功会执行open回调
  mongoose.connection.on("open", function () {
    console.log("数据库连接成功");
  });

  return mongoose;
}


module.exports = {
  "connectMongoose" : connectMongoose
}
