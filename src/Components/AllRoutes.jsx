import React from 'react'
import {Routes,Route} from "react-router-dom"
import { WomenHomepage } from '../Pages/Women_Homepage'
import { MensHomepage } from '../Pages/Mens_Homepage'
import { KidsHomepage } from '../Pages/Kids_Homepage'
import {WomenProducts} from "../Pages/WomenProducts"
import { ProductPage } from '../Pages/ProductPage'
import { Cart } from '../Pages/Cart'
import  Checkout  from '../Pages/Checkout'
import Login from '../Pages/Login'
import Signup from '../Pages/Signin'


export const AllRoutes = () => {
  return (
     <Routes>
         <Route path='/' element={<WomenHomepage/>}></Route>
         <Route path='/Mens' element={<MensHomepage/>}></Route>
         <Route path='/Kids' element={<KidsHomepage/>}></Route>
         <Route path='/WomenProducts' element={<WomenProducts/>}></Route>
         <Route path="/ProductPage/:id" element={<ProductPage/>}></Route>
         <Route path="/Cart" element={<Cart/>}></Route>
         <Route path='/Checkout' element={<Checkout/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
        <Route  path="/signin" element={<Signup/>}></Route>
     </Routes>

    )
}
