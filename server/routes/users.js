const express = require('express');
const router  = express.Router();
const User    = require('../controllers/userController')
const isLogin = require('../helper/authentication')
const isAdmin = require('../helper/authorization')
const isSelf  = require('../helper/authOwnOrAdm')
const Image = require('../helper/image')

router.put('/image',isLogin, Image.multer.single('image'), Image.sendUploadToGCS, User.postImage);
router.get('/',isLogin, isAdmin, User.findAll)
router.post('/',isLogin, isAdmin, User.createUser)
router.get('/:id/', isLogin, isSelf, User.getUserProfile)
router.put('/:id/', isLogin, isSelf, User.updateUser)
router.delete('/:id', isLogin, isSelf, User.deleteUser)
router.post('/signup', User.register)
router.post('/signin', User.login)

module.exports = router;
