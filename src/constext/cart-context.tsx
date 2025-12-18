import { createContext, useContext, useState, type ReactNode } from "react"
export interface CartItem{
  product_id: string;
  name: string;
  category: string;
  price: number;
  in_stock: boolean;
  description: string;
  image_url: string;
  image_credit: string;
  quantity:number
}
const CartContext=createContext<{
  cart:CartItem[],
  addToCart:(data:CartItem & {quantity:number})=>void,
  removeFromCart:(id:string)=>void,
  clearCart:()=>void,
  handlePlus:(id:string)=>void,
  handleMinus:(id:string)=>void
}>({
  cart:[],
  addToCart:()=>{},
  removeFromCart:()=>{},
  clearCart:()=>{},
  handlePlus:()=>{},
  handleMinus:()=>{}
});
function CartProvider({children}:{children:ReactNode}) {
  const [cart,setCart]=useState<CartItem[]>([])
  const addToCart=(data:CartItem)=>{
    setCart((prev)=>{
      return [...prev,{...data,quantity:1}]
    })
    
  }
  const removeFromCart=(id:string)=>{
    setCart((prev=>{
      return prev.filter(Item=>Item.product_id != id)
    }))
  }
  const handleMinus=(id:string)=>{
   const item= cart.find(Item=>Item.product_id == id);
   if(!item) return;
   if(item?.quantity==1) return removeFromCart(id)
    setCart(prev=>[...prev.filter(Item=>Item.product_id != id),{...item,quantity:item.quantity - 1}])
  }
  const handlePlus=(id:string)=>{
    const item= cart.find(Item=>Item.product_id == id);
    if(!item) return;
      setCart(prev=>[...prev.filter(Item=>Item.product_id != id),{...item,quantity:item.quantity + 1}])
  }
  const clearCart=()=>{
    setCart([])
  }
  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,handlePlus,handleMinus}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = ()=>useContext(CartContext)