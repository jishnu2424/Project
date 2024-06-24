const {Router} =require('express')
const designController = require('../Controller/designController')
const route =Router()

route.post('/add',designController.addDesign)

route.get('/view',designController.viewDesign)

route.patch('/update/:id',designController.updateDesign)

route.delete('/delete/:id',designController.deleteDesign)



module.exports=route