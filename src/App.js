import React,{useState} from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Home from "./Home"
import Products from './Products'
import Header from './Header'
import ProductSpecification from './Products/productSpec'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
   
  return (
    <>
    <BrowserRouter>
    <Header loginStatus={isLoggedIn} setLoginStatus={setIsLoggedIn}/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Products' element={isLoggedIn===true ?<Products />:<Navigate to="/"/>} ></Route>
        <Route path='/Products/:productId' element={< ProductSpecification/>}></Route>

        <Route path='*' element={<h1 style={{textAlign:"center",color:"grey",margin:"20px"}}>404 Not found!</h1>}></Route>

        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App