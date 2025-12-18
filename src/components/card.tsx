import { Link } from "react-router-dom";
import { useCart } from "../constext/cart-context";
import type { Clothe } from "../data"

function Card({data}:{data:Clothe}) {
  const {addToCart,cart,removeFromCart}=useCart();
  const handleAddToCart=(data:Clothe)=>{
    const isItemInCart=cart.find(Item=>Item.product_id==data.product_id)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isItemInCart?removeFromCart(data.product_id):addToCart({...data,quantity:1})
  }
  const cartIncludesData=(id:string)=>{
    return cart.find(Item=>Item.product_id==id);

  }
  return (
    <div className="card bg-base-100 w-full max-w-96 h-[440px] shadow-sm p-2 border border-blue-200 mx-auto">
      <Link to={"/detail"} className="flex-1">
      <figure className="flex-1 p-4">
        <img className="w-full h-full" style={{objectFit:"contain"}}
          src={data.image_url}
          alt="Shoes" />
      </figure>
      </Link>
      <div className="w-full h-24 flex flex-col gap-2">
        <h2 className="text-lg">{data.name}</h2>
        {/* <p>{data.description}</p>/ */}
        <div className="flex justify-between items-center">
          <p className="text-red-400 text-lg font-bold">${data.price}</p>
          <button onClick={()=>handleAddToCart(data)} className={cartIncludesData(data.product_id)?'btn border border-blue-300':`btn btn-primary`}>{cartIncludesData(data.product_id)?'Remove From Cart':'Add To Cart'}</button>
        </div>
      </div>
</div>
  )
}

export default Card