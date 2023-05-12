import React, { useEffect, useState, FC, ReactElement } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import iPhone from '../assets/iphone.jpg'
import { useLocation } from 'react-router-dom'
import {phones} from '../data.js'


interface Phone {
    id: number,
    title: string,
    cat: Array<string>,
    price: number
}

const Product:FC = ():ReactElement => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [phoneData, setPhoneData] = useState<Phone[]>([])

    useEffect(() => {
        const fetchPhoneData = () => {
            try {
                setPhoneData(phones)
            } catch(err) {
                console.log(err)
            }
        }
        fetchPhoneData()
    }, [])

  return (
    <>
        <Header/>

        {phoneData.map((phone)=> (
            phone?.id == Number(id) &&
            <div className="single-product">
                <div className="single-product_container">
                    <div className="single-product_image">
                        <img src={iPhone} alt="" />
                    </div>
                    <div className="single-product_content">
                        <h3 className='single-product_content_title'>{phone.title}</h3>
                        <p className='single-product_content_desc'>The iPhone 8 and iPhone 8 Plus[a] are smartphones designed, developed, and marketed by Apple Inc. They are the eleventh generation of the iPhone. The iPhone 8 was released on September 22, 2017, succeeding the iPhone 7 and iPhone 7 Plus respectively[8] and preceding the iPhone XR. The iPhone 8 and iPhone 8 Plus were discontinued by Apple on April 15, 2020 with the release of the second-generation iPhone SE.</p>
                        <h3 className='single-product_content_price'>$ {phone.price}</h3>
                        <div className="single-product_content_cart">
                            <button className='btn-sm'>-</button>
                            <input defaultValue={0} className='quantity' type="number" />
                            <button className='btn-sm'>+</button>
                            <button className='btn-primary cart-btn'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        <Footer/>
    </>
  )
}

export default Product