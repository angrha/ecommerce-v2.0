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
  //middleware off
  static update(req, res) {
    Item.findOne({
      _id : req.params.id,
    })
    .then(item => {
      item.title = req.body.title || item.title,
      item.description = req.body.description || item.description,
      item.category = req.body.category || item.category,
      item.price = req.body.price || item.price,
      item.image = req.body.image || item.image,

      item.save()
      .then(updatedItem => {
        res.status(200).json({
          message : 'item updated!',
          item    : updatedItem
        })
      })
      .catch( err => res.status(500).send(err))
    })
    .catch( err => res.status(500).send(err))
  }
  // middleware off
  static delete(req, res) {
    Item.remove({
      _id : req.params.id,
    })
    .then(() => {
      res.status(200).json({
        message : 'succes deleted',
      })
    })
    .catch(err => res.status(500).send(err))
  }
}

module.exports = ItemController