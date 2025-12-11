import { useCart } from "../constext/cart-context";
import type { Clothe } from "../data"

function Card({data}:{data:Clothe}) {
  const {addToCart,cart,removeFromCart}=useCart();
  const handleAddToCart=(data:Clothe)=>{
    const isItemInCart=cart.find(Item=>Item.product_id==data.product_id)
    isItemInCart?removeFromCart(data.product_id):addToCart(data)
  }
  const cartIncludesData=(id:string)=>{
    return cart.find(Item=>Item.product_id==id);

  }
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p>{data.description}</p>
    <div className="card-actions justify-end">
      <p className="text-red-400 text-lg font-bold">${data.price}</p>
      <button onClick={()=>handleAddToCart(data)} className={cartIncludesData(data.product_id)?'btn':`btn btn-primary`}>{cartIncludesData(data.product_id)?'Remove From Cart':'Add Cart'}</button>
    </div>
  </div>
</div>
  )
}

export default Card