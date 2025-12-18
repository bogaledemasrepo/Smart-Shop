import { Link } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/header"
import { useCart } from "../constext/cart-context";
import type { Clothe } from "../data";

function Detail() {
    const {addToCart,cart,removeFromCart}=useCart();
      const handleAddToCart=(data:Clothe)=>{
        const isItemInCart=cart.find(Item=>Item.product_id==data.product_id)
        isItemInCart?removeFromCart(data.product_id):addToCart({...data,quantity:1})
      }
      const cartIncludesData=(id:string)=>{
        return cart.find(Item=>Item.product_id==id);
    
      }
  return (<div className="w-full max-w-[820px] h-full mx-auto">
      <Header />
      <div className="flex gap-4 flex-wrap my-4 min-h-[84vh]">
        <div className="card bg-base-100 w-full max-w-96 h-[440px] shadow-sm p-2 border border-blue-200 mx-auto">
            <Link to={"/detail"} className="flex-1">
            <figure className="flex-1 p-4">
                <img className="w-full h-full" style={{objectFit:"contain"}}
                src={"data.image_url"}
                alt="Shoes" />
            </figure>
            </Link>
            <div className="w-full h-24 flex flex-col gap-2">
                <h2 className="text-lg">{"data.name"}</h2>
                {/* <p>{data.description}</p>/ */}
                <div className="flex justify-between items-center">
                <p className="text-red-400 text-lg font-bold">${}</p>
                <button onClick={()=>{}} className={cartIncludesData("data.product_id")?'btn border border-blue-300':`btn btn-primary`}>{cartIncludesData("data.product_id")?'Remove From Cart':'Add To Cart'}</button>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Detail