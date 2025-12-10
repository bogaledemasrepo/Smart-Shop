import { createContext, type ReactNode } from "react"

const CartContext=createContext({});
function CartProvider({children}:{children:ReactNode}) {
  return (
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider