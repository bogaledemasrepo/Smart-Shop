import { useCart, type CartItem } from "../constext/cart-context"

function CartCard({data}:{data:CartItem}) {
  const {handleMinus,handlePlus}=useCart()

  return (
   <div className="w-full h-48 bg-base-100 flex gap-4 shadow-sm border border-blue-200 rounded-lg p-2">
    <figure className="h-full w-32 rounded-lg">    
        <img className="rounded-lg" style={{objectFit:"contain"}}
        src={data.image_url}
        alt="Movie" />
    </figure>
     <div className="flex-1 p-3 flex flex-row justify-between">
      <div className="flex flex-col">
        <h2 className="card-title">{data.name}</h2>
        {/* <p>{data.description}</p> */}
      </div>
    
        <div className="card-actions flex flex-col justify-between items-center">
          <div><p className="text-red-400 font-bold">${data.quantity * data.price}</p></div>
          <div className="flex flex-row gap-2 items-center py-2">
              <button onClick={()=>handleMinus(data.product_id)} className="btn btn-primary">-</button>
              <p className="text-lg font-bold text-neutral-400 p-4">{data.quantity}</p>
              <button onClick={()=>handlePlus(data.product_id)} className="btn btn-primary">+</button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default CartCard