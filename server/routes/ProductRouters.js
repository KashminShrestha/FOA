const express=require("express")
const upload=require('../fileUpload')
const { addProduct, getallproduct, updateproduct, deleteproduct } = require("../controller/ProductController")
const router=express.Router()

router.post("/addproduct",upload.single('product_image'),addProduct)
router.get("/getproduct",getallproduct)
router.put("/updateproduct/:id",updateproduct)
router.delete("/deleteproduct/:id",deleteproduct)

module.exports=router