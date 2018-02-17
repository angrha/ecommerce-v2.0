const Transaction = require('../models/Transaction')

class TransactionController {
  static findAll(req, res) {
    Transaction.find()
      .then(transactions => {
        res.status(200).json({
          msg: 'list all transaction',
          transactions: transactions
        })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static create(req, res) {
    let transaction = new Transaction({
      customer: req.decoded.id,
      total: req.body.total,
      items: req.body.items
    })
    transaction.save()
      .then(recordTransaction => {
        res.status(200).json({
          msg: 'transaction success',
          transaction : recordTransaction
        })
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = TransactionController