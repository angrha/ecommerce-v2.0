const router = require('express').Router()
const Item = require('../controllers/itemController')
const authentication = require('../helper/authentication')
const authorization = require('../helper/authorization')

router.get('/', Item.findAll)
router.post('/', Item.create)

module.exports = router