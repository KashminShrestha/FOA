import React from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Navbar from './component/Navbar'
import Home from './page/Home'
import Products from './page/Products'
import Signin from './page/Signin'
import Signup from './page/Signup'
import Data from './page/Data'
import EmailVerification from './component/EmailVerification'
import Forget from './component/Forget'
import ResetPassword from './component/ResetPassword'
import Addcategorypage from './page/admin/Addcategorypage'
import AdminDashboard from './component/admin/AdminDashboard'
import Admincategory from './component/admin/Admincategory'
import Addcategory from './component/admin/Addcategory'
import UseState from './component/hooks/UseState'
import Cart from './page/Cart';
import Aboutus from './component/Aboutus'



const Routess = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/nav" element={<Navbar/>}/>  
    <Route path="" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/signin" element={<Signin/>}/> 
    <Route path="/register" element={<Signup/>}/> 
    <Route path="/UseState" element={<UseState/>}/>  
    <Route path="/props" element={<Data/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>

    <Route path="/cart" element={<Cart/>}/>

    <Route path="/user/verification/:token" element={<EmailVerification/>}/>  
    <Route path="/forgetpassword" element={<Forget/>}/> 
    <Route path="/user/resetpassword/:token" element={<ResetPassword/>}/> 
    <Route path="/addcategory" element={<Addcategorypage/>}/>
    <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
    <Route path="/admin/category" element={<Admincategory/>}/>
    <Route path="/admin/addcategory" element={<Addcategory/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routess