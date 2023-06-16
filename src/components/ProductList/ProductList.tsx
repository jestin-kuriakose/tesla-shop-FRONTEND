import React, { FC, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import iPhone from '../../assets/iphone.jpg'
import CartContext from '../../context/CartContext.js'
import './ProductList.scss'

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

const ProductList = ({phones, selectedCat, selectedRange}) => {
    
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
        <div className="productList">
            <div className="productList__products">
                {phones.map((phone: Phone) => (
                    selectedCat == 'all' ?
                    phone.price < Number(selectedRange) && <div className="productList__product" key={phone._id}>
                        <Link to={`/product/${phone._id}`}><img src={iPhone} className="productList__product__img"/></Link>
                        <Link to={`/product/${phone._id}`}><h3 className='productList__product__title'>{phone.title}</h3></Link>
                        <p className='productList__product__price'>$ {phone.price}</p>
                        <div className="productList__product__cart">
                            <input type="number" min={0} max={5} defaultValue={0} onChange={(e) => setQuantity(Number(e.target.value))} className="productList__product__cart__qty" />
                            <button onClick={(e)=>handleAddToCart(phone)} className="productList__product__cart__btn btn-primary">Add to cart</button>
                        </div>
                    </div> :
                    phone.cat[0] == selectedCat && phone.price < Number(selectedRange) && <div className="productList__product" key={phone._id}>
                        <Link to={`/product/${phone._id}`}><img src={iPhone} className="productList__product__img"/></Link>
                        <Link to={`/product/${phone._id}`}><h3 className='productList__product__title'>{phone.title}</h3></Link>
                        <p className='productList__product__price'>$ {phone.price}</p>
                        <div className="productList__product__cart">
                            <input type="number" min={0} max={5} defaultValue={0} className="productList__product__cart__qty" onChange={(e) => setQuantity(Number(e.target.value))}/>
                            <button onClick={(e)=>handleAddToCart(phone)} className="productList__product__cart__btn btn-primary">Add to cart</button>
                        </div>
                    </div> 

                ))}
                
            </div>
        </div>
    </>
  )
}

export default ProductList