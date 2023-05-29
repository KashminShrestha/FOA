const { json } = require('body-parser')
const Product=require('../model/ProductModel')


exports.addProduct=async(req,res)=>{
    let product=new Product({
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_description:req.body.product_description,
        product_image:req.file.path,
        count_in_stock:req.body.count_in_stock,
        rating:req.body.rating,
        category:req.body.category
    })
    product=await product.save()
    if(!product){
        return res.status(400),json({err:"product couldn't be added"})
    }
    return res.json({success:"Product added successfuly"})
}
exports.getallproduct=async(req,res)=>{
    let product=await Product.find()
    if(!product){
       return res.status(400).json({err:"something is wrong"})

    }
   return res.send(product)
}

exports.updateproduct=async(req,res)=>{
    let product=await  Product.findByIdAndUpdate(req.params.id,
        req.file?{
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_description:req.body.product_description,
        product_image:req.body.product_image,
        count_in_stock:req.body.count_in_stock,
        rating:req.body.rating,
        category:req.body.category
    }:
    {
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_description:req.body.product_description,
        count_in_stock:req.body.count_in_stock,
        rating:req.body.rating,
        category:req.body.category
    })
    if(!product){
        return res.status(400).json({err:"Something went wrong"})
    }
    return res.json({sucess:"product updated"})
}
exports.deleteproduct=async(req,res)=>{
    let deleteproduct=await Product.findByIdAndDelete(req.params.id)
    if(!deleteproduct){
        return res.status(400).json({err:"Something went wrong"})
    }
    res.json({success:"Deleted succesfully"})
}