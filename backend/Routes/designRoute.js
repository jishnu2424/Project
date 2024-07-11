const {Router} =require('express')
const designController = require('../Controller/designController')
const {verifyToken} =require('../Middleware/verifyToken')
const route =Router()

route.post('/add',verifyToken,designController.addDesign)

route.get('/view',verifyToken,designController.viewDesign)

route.get('/viewall',designController.viewAllDesign)

route.get('/viewdes/:id',designController.viewDesigndes)

route.get('/viewbyid/:id',designController.viewDesignById)

route.patch('/update/:id',verifyToken,designController.updateDesign)

route.delete('/delete/:id',verifyToken,designController.deleteDesign)

route.get('/fav',verifyToken,designController.viewFavorites)

route.put('/rating',verifyToken,designController.rating)



module.exports=route