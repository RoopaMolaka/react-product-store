import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "./index.css"


function ProductSpecification() {
    const[productDetails,setProductDetails]=useState({})
    let params=useParams()
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${params.productId}`)
        .then((res)=>{
            setProductDetails(res.data)
        
        })
    },[])
  return (
    <>
    <div className='productSpec-main-div'>
       <h1 style={{textAlign:"center",padding:"20px"}}> ProductSpecification</h1>
       <div id='product-spec-wrapper'>
        <img id='product-img-wrapper'
        src={productDetails.thumbnail}/>
        { productDetails.images ?
        <div id='small-image-wrapper'>
            {productDetails.images.map((smallImage,i)=>{
             return<div onClick={()=>{
                let productDetailsCopy={...productDetails}
                productDetailsCopy.thumbnail=smallImage
                setProductDetails(productDetailsCopy)

             }} 
             className='small-images'>
               <img className='small-img-thumbnail' src={smallImage}/>
             </div>
            })}
           
        </div>:""}
        <p><b>Title:</b>{productDetails.title}</p>
        <p><b>Category:</b>{productDetails.category}</p>
        <p><b>Description:</b>{productDetails.description}</p>
          <p><b>Price:</b>{productDetails.price}$</p>
          <p><b>Rating:</b>{productDetails.rating}/5</p>
          <p><b>Stock:</b>{productDetails.stock}</p>
          <p><b>Discount:</b>{productDetails.discountPercentage}%</p>
          



       </div>
       </div>
        </>
  )
}

export default  ProductSpecification;