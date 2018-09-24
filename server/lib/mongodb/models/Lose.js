//校园趣事
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../../../utils/time')

const loseSchema = new Schema({
  //发布人
  userName: {
    type: String,
    required: true
  },
  //发布时间
  date: {
    type: String,
    default: time()
  },
  //内容
  content: {
    type: String,
    required: true
  },
  //图片
  photo: {
    type: Array,
    default: []
  },
  //评论
  tel: {
    type: String,
    default: false
  }

})
module.exports = mongoose.model('lose', loseSchema)
