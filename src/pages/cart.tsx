import CartCard from "../components/cart-card"
import Footer from "../components/footer"
import Header from "../components/header"

function CartPage() {
  return (
        <div className="w-full max-w-[820px] h-full mx-auto">
      <Header />
      <div className="flex min-h-[90vh] gap-4 flex-wrap my-4">
         
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-xl font-semibold">Cart Content!</h1>
        {[1,2,3].map(Item=>{
          return <CartCard key={Item} />
        })}
         <button className="btn btn-primary mt-3">Order now</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CartPage