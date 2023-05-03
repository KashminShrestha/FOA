const express=require('express')
const { sample } = require('../controller/testfunction')
const router=express()

router.get("/home",sample)



module.exports=router