const  express = require('express');
require ('./DataBase/DB.js')
const userRoute = require('./Routes/UserRouter.js')
const adminRoute =require('./Routes/adminRoute')
const designerRoute =require('./Routes/designerRoute')
const contactRoute=require('./Routes/contactRoute')
const authRoute =require('./Routes/authRoute');
const designRoute = require('./Routes/designRoute.js')
const messageRoutes = require('./Routes/messageRoute.js');
const chatRoutes = require('./Routes/chatRoute.js');
const hireRoute = require('./Routes/hireRoute.js')
const bodyParser = require('body-parser')
const cors =require('cors')
const app = express()
require('dotenv').config()


app.use(cors())
app.use(express.json())
app.use(bodyParser.json({ limit: '200000mb' }));
app.use(bodyParser.urlencoded({ limit: '100000mb', extended: true }));
app.use('/user',userRoute)
app.use('/admin',adminRoute)
app.use('/designer',designerRoute)
app.use('/contact',contactRoute)
app.use('/auth',authRoute)
app.use('/design',designRoute)
app.use('/chat',chatRoutes)
app.use('/message',messageRoutes)
app.use('/hire',hireRoute)

app.listen(process.env.PORT ||5000,()=>{
    console.log("server running in 5000");
})