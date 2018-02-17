const express = require('express');
const router  = express.Router();
const Transaction = require('../controllers/transactionController')
const isLogin = require('../helper/authentication')
const isAdmin = require('../helper/authorization')
const isSelf  = require('../helper/authOwnOrAdm')

router.get('/',isLogin, isAdmin Transaction.findAll)
router.post('/', isLogin, Transaction.create)

module.exports = router;
