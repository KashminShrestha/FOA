import React from 'react'
import { Link } from 'react-router-dom'

const Carts = () => {
  return (
    <>
    <div className="container-fluid text-center">
        <table className="table table-bordered border border-3 border-primary table-striped table-hover align-middle">
            <tr>
                <td>S.no</td>
                <td>Product Name</td>
                <td>Product Image</td>
                <td>Quantity</td>
                <td>Price</td>
                <td>Action</td>
                
            </tr>
            <tr>
                <td>1</td>
                <td>Item</td>
                <td><img src="https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg?crop=0.942xw:0.707xh;0.0369xw,0.212xh&resize=1200:*" height="120px" alt="..."/></td>
                <td>2</td>
                <td>Nrs.100</td>
                <td>
                    <Link href="" className="btn btn-primary" onClick={()=>{window.confirm('Are you sure')}}><i className='bx bx-edit'></i></Link>
                    <Link href="" className="btn btn-danger" onClick={()=>{window.confirm('Are you sure')}} ><i className='bx bx-trash' ></i></Link>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Item</td>
                <td><img src="https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg?crop=0.942xw:0.707xh;0.0369xw,0.212xh&resize=1200:*" height="120px" alt="..."/></td>
                <td>2</td>
                <td>Nrs.100</td>
                <td>
                    <Link href="" className="btn btn-primary" onClick={()=>{window.confirm('Are you sure')}}><i className='bx bx-edit'></i></Link>
                    <Link href="" className="btn btn-danger" onClick={()=>{window.confirm('Are you sure')}}><i className='bx bx-trash' ></i></Link>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Item</td>
                <td><img src="https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg?crop=0.942xw:0.707xh;0.0369xw,0.212xh&resize=1200:*" height="120px" alt="..."/></td>
                <td>2</td>
                <td>Nrs.100</td>
                <td>
                    <Link href="" className="btn btn-primary" onClick={()=>{window.confirm('Are you sure')}}><i className='bx bx-edit'></i></Link>
                    <Link href="" className="btn btn-danger" onClick={()=>{window.confirm('Are you sure')}}><i className='bx bx-trash' ></i></Link>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Item</td>
                <td><img src="https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg?crop=0.942xw:0.707xh;0.0369xw,0.212xh&resize=1200:*" height="120px" alt="..."/></td>
                <td>2</td>
                <td>Nrs.100</td>
                <td>
                    <Link href="" className="btn btn-primary" onClick={()=>{window.confirm('Are you sure')}}><i className='bx bx-edit'></i></Link>
                    <Link href="" className="btn btn-danger" onClick={()=>{window.confirm('Are you sure')}}><i className='bx bx-trash' ></i></Link>
                </td>
            </tr>
        </table>
    </div>
    </>
  )
}

export default Carts 