const {Router} =require('express')
const authController = require('../Controller/authController')
const route = Router()

route.post('/add/user',authController.addUserOrDesigner)

route.post('/login/user',authController.loginUserOrDesigner)


module.exports=route
