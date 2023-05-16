import { createContext, useState } from "react"

const CartContext:React.Context<{}> = createContext({})

interface Cart {
    id: number,
    title: string,
    price: number,
    quantity: number
}

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState<Cart[]>([])
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext