import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import AdminSidebar from './AdminSidebar'
import Footer from '../Footer'
import { getcategory } from '../../api/adminApi'
import { Link } from 'react-router-dom'

const Admincategory = () => {
    let [categories,setCategories]=useState([])
    let[error,setError]=useState('')

    useEffect(()=> {
        getcategory()
        .then(data=>{
            if(data.err){
                setError(data.err)
            }
            else{
                setCategories(data)
            }
        })
    },[])
    const showError=()=>{
        if(error){
        return <div className='alert alert-danger'>{error}</div>


        }
    }

  return (
    <>
    {
        showError()
    }
    <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-3'>
                <AdminSidebar category/>
            </div>
            <div className='col-9'>
                <h1>Category</h1>
                <table className='table table-bordered'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category_name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        {
                            categories && categories.map((v,i)=>{
                                return (
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{v.category_name}</td>
                                    <td>
                                        <button className='btn btn-primary'>Update</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                        </tbody>
                    
                </table>
                <Link to="/admin/addcategory" >Add New Category</Link>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default Admincategory