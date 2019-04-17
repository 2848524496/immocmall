// 作用是什么？
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//设计字段
var produtSchema = new Schema({
  "productId":{type:String},
  "productName":String,
  "salePrice":Number,
  "checked":String,
  "productNum":Number,
  "productImage":String
});

module.exports = mongoose.model('Good',produtSchema);
