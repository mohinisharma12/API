const express = require('express')
const UserController = require('../controllers/UserController')
const { ChangeUserAuth } = require('../middleware/auth')
const ProductController = require('../controllers/ProductController')
const router = express.Router()
const CategoryController = require('../controllers/CategoryController')



//usercontroller
router.get('/getalluser',UserController.getalluser)
router.post('/userinsert',UserController.userinsert)
router.post('/verifyLogin',UserController.loginUser)
router.post('/logout',UserController.logout)
router.post('/updatePassword',ChangeUserAuth,UserController.updatePassword)
router.get('/admin/getUser/:id', UserController.getSingleUser)
router.post('/updateProfile',ChangeUserAuth, UserController.updateProfile)
router.get('/me',ChangeUserAuth,UserController.getUserDetail)
router.get('/admin/deleteUser/:id', UserController.deleteUser)

//productcontroller
router.get('/products', ProductController.getAllProducts)
router.get('/getProductDetail/:id', ProductController.getProductDetail)
router.get('/product/getAdminProduct', ProductController.getAdminProduct)
router.get('/deleteProduct/:id', ProductController.deleteProduct)
router.post('/product/create',ProductController.createProduct)
router.get('/getAllCategories', CategoryController.view);
router.post('/insertCategory', CategoryController.insert);
router.get('/getCategory/:id', CategoryController.display);
router.put('/updateCategory/:id', CategoryController.update);
router.delete('/deleteCategory/:id', CategoryController.delete);

module.exports=router