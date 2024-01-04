import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./index.css"

function Products() {
  let navigate = useNavigate()
    const[products,setProducts]=useState([])
    const[items,setItems]=useState("")
    const[filterredUsers,setFilterredUsers]=useState([])
    useEffect(()=>{
        axios.get(" https://dummyjson.com/products")
        .then((res)=>{
            setProducts(res.data.products)
        })
    },[])
    useEffect(()=>{
      let filteredUsers=products.filter((product,i)=>{
         if(product.title.toLowerCase().includes(items.toLowerCase())===true){
          return true
         }else{
          return false
         }
      })
     setFilterredUsers(filteredUsers)
      },[items])
    
  return (
    <>
    <div className='product-main-div'>
      <h1 id='product-head' >Products</h1> 
    <div className='searchBar'>
    <input id='products-input-styling' value={items} type="text" placeholder='search product name'
    onChange={(e)=>{
      setItems(e.target.value)
    }} />
    </div>
    <div id='div-wrapper'>
       {filterredUsers.length>0 ?filterredUsers.map((product,i)=>{
         return <div className='product-card' onClick={()=>{navigate(`/products/${product.id}`)}}>
         <img className='img-thumbnail'
          src={product.thumbnail}
          />
          <p><b>Title:</b>{product.title}</p>
          <p><b>Price:</b>{product.price}</p>
          <p><b>Rating:</b>{product.rating}</p>

     </div>
      }):
       products.map((product,i)=>{
         return <div className='product-card' onClick={()=>{navigate(`/products/${product.id}`)}}>
         <img className='img-thumbnail'
          src={product.thumbnail}
          />
          <p><b>Title:</b>{product.title}</p>
          <p><b>Price:</b>{product.price}</p>
          <p><b>Rating:</b>{product.rating}</p>

     </div>
      })}
        
       

    </div>
    </div>
    </>
  )
}

export default Products