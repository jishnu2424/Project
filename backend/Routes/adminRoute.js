const {Router} =require('express')
const adminController = require('../Controller/adminController')
const {isAdmin} =require('../Middleware/verifyToken')

const route =Router()



route.get('/view',isAdmin,adminController.viewUser)

route.delete('/delete/:id',isAdmin,adminController.deleteUser)

route.get('/viewdesigner',isAdmin,adminController.viewDesigner)

route.delete('/deletedesigner/:id',isAdmin,adminController.deleteDesigner)



module.exports=route