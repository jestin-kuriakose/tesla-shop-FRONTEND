import React, { useEffect, useState, FC, ReactElement } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import iPhone from '../assets/iphone.jpg'
import { useLocation } from 'react-router-dom'
import {phones} from '../data.js'
import axios from 'axios'

const conditionDescription = 
    <div>
        <p><strong>Like New:</strong> These devices look like and function like a new phone with no scratches or blemishes!</p>
        <p><strong>Great:</strong> These devices will be free of visible dents, chips and scratches!</p>
        <p><strong>Very Good:</strong> These devices may have light scuffs or subtle scratches. They are available at fantastic value!</p>
        <p><strong>Good:</strong> These devices typically have visible scuffs, hairline scratches, or other minor imperfections.</p>
    </div>

interface Phone {
    id: number,
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

const Product:FC = ():ReactElement => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [phoneData, setPhoneData] = useState<Phone | undefined>()

    useEffect(() => {
        const fetchPhoneData = async() => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/products/${id}`)
                setPhoneData(response.data)
                console.log(response.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchPhoneData()
    }, [])

  return (
    <>
        <Header/>
            <div className="single-product">
                <div className="single-product_container">
                    <div className="single-product_image">
                        <img src={iPhone} alt="" />
                    </div>
                    <div className="single-product_content">
                        <h3 className='single-product_content_title'>{phoneData?.title}</h3>
                        <p className='single-product_content_desc'>{conditionDescription}</p>

                        <div className="single-product_content_storage">
                            <label htmlFor="">Storage: </label>
                            {phoneData?.storage.map((s) => (
                                <button className="single-product_content_storage_btn">{s}</button>
                            ))}
                        </div>
                        <div className="single-product_content_color">
                            <label htmlFor="">Color: </label>
                            {phoneData?.color.map((s) => (
                                <button className="single-product_content_color_btn">{s}</button>
                            ))}
                        </div>
                        <div className="single-product_content_condition">
                            <label htmlFor="">Condition: </label>
                            {phoneData?.condition.map((s) => (
                                <button className="single-product_content_condition_btn">{s}</button>
                            ))}
                        </div>
                        <h3 className='single-product_content_price'>$ {phoneData?.price}</h3>
                        <div className="single-product_content_cart">
                            <button className='btn-sm'>-</button>
                            <input defaultValue={0} className='quantity' type="number" />
                            <button className='btn-sm'>+</button>
                            <button className='btn-primary cart-btn'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="single-product_description">

                </div>
            </div>
        <Footer/>
    </>
  )
}

export default Product