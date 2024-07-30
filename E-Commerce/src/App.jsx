import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import MenBanner from './Components/Assets/banner_mens.png'
import WomenBanner from './Components/Assets/banner_women.png'
import KidsBanner from './Components/Assets/banner_kids.png'




const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Shop />} />
                    <Route path='/men' element={<ShopCategory banner={MenBanner} category='men' />} />
                    <Route path='/women' element={<ShopCategory banner={WomenBanner} category='women' />} />
                    <Route path='/kids' element={<ShopCategory banner={KidsBanner} category='kid' />} />
                    <Route>
                        <Route path='/product/:productId' element={<Product />} />
                    </Route>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/loginsignup' element={<LoginSignup />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App