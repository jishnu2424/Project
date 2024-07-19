const {Router} =require('express')
const userController = require('../Controller/usercontroller')
const {verifyToken} = require('../Middleware/verifyToken')
const route =Router()

route.get('/view',userController.viewUser)

route.delete('/delete',userController.deleteUser)

route.patch('/update/:id',userController.updateUser)

route.post('/favs/:id',verifyToken,userController.addToFavorites)

route.delete('/favdelete/:id',verifyToken,userController.deletFromFavorites)

route.get('/viewid/:id',userController.viewuserId)

module.exports=route