const Item = require('../models/itemModel')

class ItemController {
  static findAll(req, res) {
    Item.find()
    .then(items => {
      res.status(200).json({
        message : 'list of all Items',
        items : items
      })
    })
    .catch( err => res.status(500).send(err))
  }

  static create(req, res) {
    let objItem = {
      title : req.body.title,
      description : req.body.description,
      category : req.body.category,
      price : req.body.price,
      image : req.body.image
    }

    let item = new Item(objItem)

    item.save()
    .then(item => {
      res.status(200).json({
        message : 'succes add new item',
        item : item
      })
    })
    .catch(err => res.status(500).send(err))
  }
}

module.exports = ItemController