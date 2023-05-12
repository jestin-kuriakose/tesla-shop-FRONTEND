import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, Outlet } from 'react-router-dom'
import ProductList from '../components/ProductList'

const Shop = () => {
    const [selectedCat, setSelectedCat] = useState<string>("all")
    const [selectedRange, setSelectedRange] = useState<string>("600")
  return (
    <div>
        <Header/>
        <div className="shop">
            <div className="filter">
                <input type="text" className="search" placeholder='Search...' />
                <h1>Categories</h1>
                <div className="cats">
                    <span onClick={()=>setSelectedCat("Apple")} className="cat">Apple</span>
                    <span onClick={()=>setSelectedCat("samsung")} className="cat">Samsung</span>
                    <span onClick={()=>setSelectedCat("lg")} className="cat">LG</span>
                    <span onClick={()=>setSelectedCat("google")} className="cat">Google</span>
                </div>
                <h1>Maximum Price</h1>
                <div className="price">
                    <input list='values' type="range" name="priceRange" id="priceRange" className='priceRange' min='100' max='600' step='50' value={selectedRange} onChange={(e)=>setSelectedRange(e.target.value)}/>
                    <span className="price">${selectedRange}</span>
                </div>
            </div>
            <ProductList selectedCat={selectedCat} selectedRange={selectedRange} />
        </div>
        <Footer/>
    </div>
  )
}

export default Shop