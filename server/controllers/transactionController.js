const Transaction = require('../models/Transaction')

class TransactionController {
  static create(req, res) {
    let transaction = new Transaction({
      customer: req.body.id,
      total: req.body.total
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