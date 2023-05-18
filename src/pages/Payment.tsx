import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { FC, useContext, useEffect, useState } from "react"
import axios from "../api/axios"
import CheckoutForm from "../components/CheckoutForm"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CartContext from "../context/CartContext"

const Payment:FC = () => {
    const [stripePromise, setStripePromise] = useState<string | null>(null)
    const [clientSecret, setClientSecret] = useState<string | null>("")
    const { cart, setCart } = useContext(CartContext)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const fetchPublishableKey = async() => {
            const response = await axios.get('/api/v1/payment/config')
            const { publishableKey } = response.data
            setStripePromise(loadStripe(publishableKey))
        }
        fetchPublishableKey()
    }, [])

    useEffect(() => {
        const createPaymentIntent = async() => {
            try {
                const response = await axios.post('/api/v1/payment/create-payment-intent',JSON.stringify({}))
                const { clientSecret } = response.data
                setClientSecret(clientSecret)
            } catch(err) {
                console.log(err)
            }
        }
        createPaymentIntent()
    }, [])

    useEffect(() => {
        setCartTotal(0)
        const getCartTotal = () => {
            cart?.map((item) => {
                setCartTotal(prev => prev + (item.price * item.quantity))
            })
        }
        getCartTotal()
    }, [cart])

  return (
    <>
        <Header/>
        <div className="payment">
            <div className="payment_container">
                <h1>Payment</h1>
                {cartTotal > 0 ?
                <div className="payment_container_info">
                    <div className="payment_container_left">
                        <h1>Cart</h1>
                        {cart?.map((item) => (
                            <div className="payment_container_left_item">
                                <div className="payment_container_left_item_info1">
                                    <h3>{item.title}</h3>
                                    <p style={{marginTop: "2px"}}>Quantity: {item.quantity}</p>
                                </div>
                                <div className="payment_container_left_item_info2">
                                    <p>${item.price}</p>
                                </div>
                            </div>  
                        ))}
                        <span className="divider"></span>

                        <div className="payment_container_left_total">
                            <h3>Total</h3>
                            <h3>${cartTotal}</h3>
                        </div>
                    </div>


                    <div className="payment_container_right">
                        {clientSecret && stripePromise && (
                        <Elements stripe={stripePromise} options={{ clientSecret }}>
                            <CheckoutForm/>
                        </Elements>
                        )}
                    </div>
                </div> 
                :
                <h3>No products in cart ! <br/><br/> Add some products to cart to checkout.</h3>
                }
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Payment