import React, { FC, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {phones} from '../data.js'
import iPhone from '../assets/iphone.jpg'
import CartContext from '../context/CartContext.js'

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

interface Props {
    phones: Phone[],
    selectedCat: string,
    selectedRange: string
}

interface Cart {
    id: number,
    title: string,
    price: number,
    quantity: number
}

const ProductList:FC<any>  = ({phones, selectedCat, selectedRange}) => {

    const { cart, setCart }:any = useContext(CartContext)
    const [quantity, setQuantity] = useState<number>(0)

    const handleAddToCart = (phone) => {
        const duplicate = cart?.find(p=>p.id == phone._id)

        if(quantity < 1) {
            alert("Quantity must be greater than 0")
            return;
        }

        setCart((prev) => {
            if(duplicate) {
                const newData = prev.map((obj) => {
                    if(obj.id == phone._id) {
                        return {...obj, quantity}
                    } else {
                        return obj
                    }
                })
                return newData
            } else {
                return [...prev, {
                    id: phone._id,
                    title: phone.title,
                    price: phone.price,
                    quantity
                }]
            }
            
        })
        setQuantity(0)
    }

  return (
    <>
            <div className="content">
                <div className="products">
                    {phones.map((phone: Phone) => (
                        selectedCat == 'all' ?
                        phone.price < Number(selectedRange) && <div className="product" key={phone._id}>
                            <Link to={`/product/${phone._id}`}><img src={iPhone} className="product_image"/></Link>
                            <Link to={`/product/${phone._id}`}><h3 className='product_title'>{phone.title}</h3></Link>
                            <p className='product_price'>{phone.price}</p>
                            <div className="product_cart">
                                <input type="number" min={0} max={5} defaultValue={0} onChange={(e) => setQuantity(Number(e.target.value))} className="product_cart_qty" />
                                <button onClick={(e)=>handleAddToCart(phone)} className="product_cart_btn btn-primary">Add to cart</button>
                            </div>
                        </div> :
                        phone.cat[0] == selectedCat && phone.price < Number(selectedRange) && <div className="product" key={phone._id}>
                            <Link to={`/product/${phone._id}`}><img src={iPhone} className="product_image"/></Link>
                            <Link to={`/product/${phone._id}`}><h3 className='product_title'>{phone.title}</h3></Link>
                            <p className='product_price'>{phone.price}</p>
                            <div className="product_cart">
                                <input type="number" min={0} max={5} defaultValue={0} className="product_cart_qty" onChange={(e) => setQuantity(Number(e.target.value))}/>
                                <button onClick={(e)=>handleAddToCart(phone)} className="product_cart_btn btn-primary">Add to cart</button>
                            </div>
                        </div> 

                    ))}
                    
                </div>
            </div>
    </>
  )

}
export default ProductList