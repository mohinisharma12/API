const express = require('express')
const UserController = require('../controllers/UserController')
// const { Module } = require('module')
const router = express.Router()


//usercontroller
router.get('/getalluser',UserController.getalluser)
router.post('/userinsert',UserController.userinsert)
router.post('/verifyLogin',UserController.loginUser)




module.exports=router