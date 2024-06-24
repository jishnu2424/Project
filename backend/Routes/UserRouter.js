const {Router} =require('express')
const userController = require('../Controller/usercontroller')
const route =Router()

route.get('/view',userController.viewUser)

route.delete('/delete',userController.deleteUser)

route.patch('/update/:userId',userController.updateUser)

module.exports=route