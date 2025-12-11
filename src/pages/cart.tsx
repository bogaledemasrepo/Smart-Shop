import { Link } from "react-router-dom";
import CartCard from "../components/cart-card"
import Footer from "../components/footer"
import Header from "../components/header"
import { useCart } from "../constext/cart-context"

function CartPage() {
  const {cart,clearCart}=useCart();
  return (
      <div className="w-full max-w-[820px] h-full mx-auto">
      <Header />
      <div className="flex min-h-[90vh] gap-4 flex-wrap my-4">
         
        <div className="w-full flex flex-col gap-2">
          
        {cart.length>0&&<>
        <h1 className="text-xl font-semibold">Cart Content!</h1>
        {
        cart.map(Item=>{
          return <CartCard key={Item.product_id} data={Item} />
        })}
        <div className="flex space-x-8 mt-3 w-full">
          <button className="btn" onClick={clearCart}>Clear Cart</button>
          <button className="btn btn-primary">Order now</button>
        </div>
        </>}
         {cart.length==0&&<>
      
         <div className="flex space-x-8 mt-3 w-full h-full items-center justify-center flex-col">
           <div className="flex w-64 h-36 mx-auto rounder-full items-center justify-center ">
          <h1 className="text-xl font-semibold">Your Cart is Empity!</h1>
         </div>
          <Link to={"/"}><button className="btn btn-primary">Shop now</button></Link>
        </div>
         </>}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CartPage