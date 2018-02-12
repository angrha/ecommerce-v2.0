const router = require('express').Router()
const Item = require('../controllers/itemController')
const authentication = require('../helper/authentication')
const authorization = require('../helper/authorization')
const authOwnOrAdm = require('../helper/authOwnOrAdm')

router.get('/', Item.findAll)
router.post('/', Item.create)
router.delete('/:id', Item.delete)
router.put('/:id', Item.update)

module.exports = router