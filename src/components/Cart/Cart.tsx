import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'
import iPhone from '../../assets/iphone.jpg'
import { Link } from 'react-router-dom'
import './Cart.scss'

const Cart: React.FC = () => {
    const { cart, setCart }:any = useContext(CartContext)
    const [cartTotal, setCartTotal] = useState(0)
    let totalQuantity = 0;
    let totalPrice = 0;

    useEffect(() => {
        setCartTotal(0)
        const getCartTotal = () => {
            cart?.map((item) => {
                setCartTotal(prev => prev + (item.price * item.quantity))
            })
        }
        getCartTotal()
    }, [cart])

    const handleItemRemove = (removeId) => {
        const newCart = cart?.filter(item => item.id != removeId)
        setCart(newCart)
    }

  return (
    <div className='cart'>
        {cartTotal >0 ?
        <div className="cart_container">
            <h3 className="cart_container_title">Shopping Cart</h3>
            <div className="cart_item_container">
                {cart?.map((item) => (
                    <div className="cart_item_single">
                        <div className="cart_item_single_image">
                            <img src={iPhone} alt="" />
                        </div>
                        <div className="cart_item_single_left">
                            <h3>{item?.title}</h3>
                            <p>Quantity: {item?.quantity}</p>
                            <button onClick={()=>handleItemRemove(item.id)} className="btn-sm">Remove</button>
                        </div>
                        <div className="cart_item_single_right">
                            <h3>$ {item?.price}</h3>
                        </div>

                    </div>
                ))}
                    
                    <span className='divider'></span>

                    <div className="cart_item_total">
                        <div className="cart_item_total_left">
                            <h3>Total</h3>
                            <p>Total Items: {cart?.length}</p>
                        </div>
                        <div className="cart_item_total_right">
                            <h3>$ {cartTotal}</h3>
                        </div>
                    </div>
            </div>
            <Link to={'/payment'} className="checkout_btn"><button className='btn-lg'>Checkout</button></Link>
        </div>
        :
        <h3 style={{textAlign:"center", margin: "100px 0px"}}>No products in cart ! <br/><br/> Add some products to cart to checkout.</h3>
    }
    </div>
  )
}

export default Cart