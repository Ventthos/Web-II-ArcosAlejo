import { Routes, Route } from "react-router-dom"

import Home from '../page/Home'
import About from '../page/About'
import Contact from '../page/Contact'
import Login from "../page/Login"
import Products from '../page/Products';
import Product from "../page/Product"
import { Cart } from "../page/Cart"
import { CreateProductPage } from "../page/CreateProduct"
import { ReducerScreen } from "../page/ReducerScreen"

export default function MyRouters()
{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/addProduct" element={<CreateProductPage/>}/>
            <Route path="/usereducer-component" element={<ReducerScreen/>}/>
        </Routes>
    )
}