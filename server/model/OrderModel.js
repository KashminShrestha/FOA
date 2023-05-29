let mongoose=require('mongoose')
const OrderItems = require('./OrderItems')
let {ObjectId}=mongoose.Schema

let orderSchema=new mongoose.Schema({
    orderItems:[{
        type:ObjectId,
        ref:OrderItems,
    }],
    user:{
        type:ObjectId,
        ref:"User"
    },
    total:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:"Pending"
    }
},{timestamps:true})

module.exports=mongoose.model("Order",orderSchema)