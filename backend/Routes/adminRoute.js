const {Router} =require('express')
const adminController = require('../Controller/adminController')
const route =Router()



route.get('/view',adminController.viewUser)

route.delete('/delete/:id',adminController.deleteUser)

route.get('/viewdesigner',adminController.viewDesigner)

route.delete('/deletedesigner/:id',adminController.deleteDesigner)



module.exports=route