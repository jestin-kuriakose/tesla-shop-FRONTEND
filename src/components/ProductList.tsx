import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import {phones} from '../data.js'
import iPhone from '../assets/iphone.jpg'

interface Props {
    selectedCat: string,
    selectedRange: string
}

const ProductList:FC<Props> = ({selectedCat, selectedRange}) => {
  return (
    <>
        <div className="content">
            <div className="products">
                {phones.map((phone: any) => (
                    selectedCat == 'all' ?
                    phone.price < selectedRange && <div className="product" key={phone.id}>
                        <Link to={`/product/${phone.id}`}><img src={iPhone} className="product_image"/></Link>
                        <Link to={`/product/${phone.id}`}><h3 className='product_title'>{phone.title}</h3></Link>
                        <p className='product_price'>{phone.price}</p>
                        <div className="product_cart">
                            <input type="number" min={0} max={5} defaultValue={0} className="product_cart_qty" />
                            <button className="product_cart_btn btn-primary">Add to cart</button>
                        </div>
                    </div> :
                    phone.cat == selectedCat && phone.price < selectedRange && <div className="product" key={phone.id}>
                        <Link to={`/product/${phone.id}`}><img src={iPhone} className="product_image"/></Link>
                        <Link to={`/product/${phone.id}`}><h3 className='product_title'>{phone.title}</h3></Link>
                        <p className='product_price'>{phone.price}</p>
                        <div className="product_cart">
                            <input type="number" min={0} max={5} defaultValue={0} className="product_cart_qty" />
                            <button className="product_cart_btn btn-primary">Add to cart</button>
                        </div>
                    </div> 

                ))}
                
            </div>
        </div>
    </>
  )
}

export default ProductList