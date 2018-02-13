const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  description: String,
  category: String,
  price: Number,
  image: String
}, {
  timestamps: true
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item