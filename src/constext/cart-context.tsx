import { createContext, useContext, useState, type ReactNode } from "react"
import type { Clothe } from "../data";

const CartContext=createContext<{
  cart:Clothe[],
  addToCart:(data:Clothe)=>void,
  removeFromCart:(id:string)=>void,
  clearCart:()=>void,
}>({
  cart:[],
  addToCart:()=>{},
  removeFromCart:()=>{},
  clearCart:()=>{}
});
function CartProvider({children}:{children:ReactNode}) {
  const [cart,setCart]=useState<Clothe[]>([])
  const addToCart=(data:Clothe)=>{
    setCart((prev)=>{
      return [...prev,data]
    })
    
  }
  const removeFromCart=(id:string)=>{
    setCart((prev=>{
      return prev.filter(Item=>Item.product_id != id)
    }))
  }
  const clearCart=()=>{
    setCart([])
  }
  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

export const useCart = ()=>useContext(CartContext)