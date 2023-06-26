import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProductList from '../../components/ProductList/ProductList'
import './Shop.scss'
import axios from '../../api/axios'

interface Phone {
    _id: number,
    title: string,
    desc?: string,
    cat: Array<string>,
    price: number,
    color: Array<string>,
    storage: Array<string>,
    condition: Array<string>,
    image?: string,
    variation: Array<string>
}

const Shop = () => {
    const [phones, setPhones] = useState<Phone[]>([])
    const [selectedCat, setSelectedCat] = useState<string>("all")
    const [selectedRange, setSelectedRange] = useState<string>("600")

    useEffect(() => {
        const fetchPhones = async() => {
            try {
                const response = await axios.get('/api/v1/products')
                setPhones(response.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchPhones()
    },[])
  return (
    <div>
        <Header/>
        <div className="shop">
            <div className="shop__container">
                <div className="shop__filter">
                    <input type="text" className="shop__filter__search" placeholder='Search...' />
                    <h1 className='shop__filter__categoryLabel'>Categories</h1>
                    <div className="shop__filter__categories">
                        <span onClick={()=>setSelectedCat("Apple")} className="shop__filter__categories__cat">Apple</span>
                        <span onClick={()=>setSelectedCat("samsung")} className="shop__filter__categories__cat">Samsung</span>
                        <span onClick={()=>setSelectedCat("lg")} className="shop__filter__categories__cat">LG</span>
                        <span onClick={()=>setSelectedCat("google")} className="shop__filter__categories__cat">Google</span>
                    </div>
                    <h1 className='shop__filter__priceLabel'>Maximum Price</h1>
                    <div className="shop__filter__price">
                        <input list='values' type="range" name="priceRange" id="priceRange" className='shop__filter__price__priceRange' min='100' max='600' step='50' value={selectedRange} onChange={(e)=>setSelectedRange(e.target.value)}/>
                        <span className="shop__filter__price__value">${selectedRange}</span>
                    </div>
                </div>
                <ProductList phones={phones} selectedCat={selectedCat} selectedRange={selectedRange} />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Shop