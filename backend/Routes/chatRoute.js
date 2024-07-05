const {Router} = require ('express')
const chatController = require('../Controller/chatController')
const {verifyToken} = require('../Middleware/verifyToken')
const route = Router()

route.get("/", verifyToken,chatController.getChats);
route.get("/:id", verifyToken,chatController.getChat);
route.post("/add", verifyToken,chatController.addChat);
route.put("/read/:id", verifyToken,chatController.readChat);


module.exports=route