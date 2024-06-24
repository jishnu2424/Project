const  express = require('express');
require ('./DataBase/DB.js')
const userRoute = require('./Routes/UserRouter.js')
const adminRoute =require('./Routes/adminRoute')
const designerRoute =require('./Routes/designerRoute')
const contactRoute=require('./Routes/contactRoute')
const authRoute =require('./Routes/authRoute');
const designRoute = require('./Routes/designRoute.js')
const cookieParser = require('cookie-parser');
const cors =require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/user',userRoute)
app.use('/admin',adminRoute)
app.use('/designer',designerRoute)
app.use('/contact',contactRoute)
app.use('/auth',authRoute)
app.use('/design',designRoute)


app.listen(5000,()=>{
    console.log("server running");
})