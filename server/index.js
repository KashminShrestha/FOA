const express=require("express")
const app=express()
const cors=require('cors')
require('dotenv').config()

port=process.env.PORT || 3001

const testroute=require('./routes/testroute')
const userroute=require('./routes/UserRoutes')
const categoryroute= require('./routes/CategoryRoutes')




require('./database/connection')

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})

app.use(cors())
app.use(express.json())
app.use(testroute)
app.use('/user',userroute)
app.use('/category',categoryroute)


console.log("Hello")