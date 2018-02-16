const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  total: String,
  items: Array,
}, {
  timestamps: true
})

const Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction