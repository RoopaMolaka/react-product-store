import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

function Header(props) {
    const RenderButton = () => {
        if (props.loginStatus === true) {
           return <button className='btn-header' onClick={() => {props.setLoginStatus(false) }}>Logout</button>
        } else {
           return <button  className='btn-header' onClick={() => {props.setLoginStatus(true) }}>Login</button>
        }

      }

  return (
    <>
   <div className="container-fluid" id='head-style'>
   <Link style={{ textDecoration: 'none',color:"grey" ,fontSize:"30px"}} to="/">Home</Link>
    <Link style={{ textDecoration: 'none',color:"grey" ,fontSize:"30px" }} to="/Products">Products</Link>
    <RenderButton />
   </div>
   </>
  )
}

export default Header;