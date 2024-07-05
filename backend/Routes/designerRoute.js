const {Router} =require('express')
const designerController = require('../Controller/designerController')
const route =Router()

route.get('/view',designerController.viewDesigner)

route.delete('/delete/:id',designerController.deleteDesigner)

route.patch('/update/:id',designerController.updateDesigner)

module.exports=route