const express=require("express")
const app=express()
require('dotenv').config()

port=process.env.PORT || 3001

const testroute=require('./routes/testroute')


require('./database/connection')

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})

app.use(express.json())
app.use(testroute)


console.log("Hello")