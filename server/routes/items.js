const router = require('express').Router()
const Item = require('../controllers/itemController')
const isLogin = require('../helper/authentication')
const isAdmin = require('../helper/authorization')
const isSelf = require('../helper/authOwnOrAdm')

router.get('/', Item.findAll)
router.post('/', isLogin, Item.create)
router.delete('/:id', isLogin, Item.delete)
router.put('/:id', isLogin, Item.update)

module.exports = router