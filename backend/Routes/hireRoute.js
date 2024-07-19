const {Router} =require('express')
const hireController = require('../Controller/hireController')
const {verifyToken} = require('../Middleware/verifyToken')
const route = Router()

route.post('/add/:desgnerId',verifyToken,hireController.addHire)

route.get('/get',hireController.viewHire)

route.get('/getbyid/:id',hireController.viewHireById)

route.get('/getdesigner',verifyToken,hireController.ViewbyDesigner)

module.exports =route