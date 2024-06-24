const {Router} =require('express')
const contactController = require('../Controller/contactController')
const route =Router()


route.post('/add',contactController.addReview)

route.get('/view',contactController.viewContact)




module.exports=route