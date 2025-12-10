import Footer from "../components/footer"
import Header from "../components/header"
import OrderCard from "../components/order-card"

function OrdersPage() {
  return (
        <div className="w-full max-w-[820px] h-full mx-auto">
      <Header />
      <div className="flex min-h-[84vh] gap-4 flex-wrap my-4">
        <div className="w-full flex flex-col gap-2">
        {[1,2,3,4].map(Item=>{
          return <OrderCard key={Item}/>
        })}
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default OrdersPage