import React, { useEffect, useState, FC, ReactElement } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import iPhone from '../../assets/iphone.jpg'
import { useLocation } from 'react-router-dom'
import {phones} from '../data.js'
import './Product.scss'
import axios from '../../api/axios'

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
                const response = await axios.get(`/api/v1/products/${id}`)
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
                <div className="single-product__container container">
                    <div className="single-product__image">
                        <img src={iPhone} alt="" />
                    </div>
                    <div className="single-product__content">
                        <h3 className='single-product__content__title title-primary'>{phoneData?.title}</h3>
                        <div className='single-product__content__desc subtitle-primary'>
                            <p><strong>Like New:</strong>
                                 These devices look like and function like a new phone with no scratches or blemishes!</p>
                            <p><strong>Great:</strong>
                                 These devices will be free of visible dents, chips and scratches!</p>
                            <p><strong>Very Good:</strong>
                                 These devices may have light scuffs or subtle scratches. They are available at fantastic value!</p>
                            <p><strong>Good:</strong>
                                 These devices typically have visible scuffs, hairline scratches, or other minor imperfections.</p>
                        </div>

                        <div className="single-product__content__storage">
                            <label htmlFor="">Storage: </label>
                            {phoneData?.storage.map((s) => (
                                <button className="single-product__content__storage__btn btn-primary">{s}</button>
                            ))}
                        </div>
                        <div className="single-product__content__color">
                            <label htmlFor="">Color: </label>
                            {phoneData?.color.map((s) => (
                                <button className="single-product__content__color__btn btn-primary">{s}</button>
                            ))}
                        </div>
                        <div className="single-product__content__condition">
                            <label htmlFor="">Condition: </label>
                            {phoneData?.condition.map((s) => (
                                <button className="single-product__content__condition__btn btn-primary">{s}</button>
                            ))}
                        </div>
                        <h3 className='single-product__content__price'>$ {phoneData?.price}</h3>
                        <div className="single-product__content__cart">
                            <button className='single-product__content__cart__removebtn btn-primary'>-</button>
                            <input defaultValue={0} className='single-product__content__cart__quantity' type="number" />
                            <button className='single-product__content__cart__addbtn btn-primary'>+</button>
                            <button className='single-product__content__cart__addtocartbtn btn-primary'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="single-product__description">

                </div>
            </div>
        <Footer/>
    </>
  )
}

export default Product