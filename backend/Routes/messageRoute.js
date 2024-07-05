const {Router} = require ('express')
const messageRoutes = require('../Controller/messageController')
const {verifyToken} = require('../Middleware/verifyToken')
const route = Router()

route.post("/:chatId", verifyToken,messageRoutes.addMessage);



module.exports=route