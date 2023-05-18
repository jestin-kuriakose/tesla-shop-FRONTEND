import { PaymentElement } from "@stripe/react-stripe-js"
import { useStripe, useElements } from "@stripe/react-stripe-js"
import { useState } from "react"

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const [message, setMessage] = useState<String | null>()
    const [isProcessing, setIsProcessing] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!stripe || !elements) {
            return;
        }

        setIsProcessing(true)

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/completion`
            }
        })

        if(error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message)
        } else {
            setMessage("An unexpected error occured")
        }

        setIsProcessing(false)
    }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element"/>
        <button className="btn-lg">
            <span>
                {isProcessing ? "Processing..." : "Pay now"}
            </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
    </form>
  )
}

export default CheckoutForm