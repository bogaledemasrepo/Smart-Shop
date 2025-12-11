import type { Clothe } from "../data"

function CartCard({data}:{data:Clothe}) {
  return (
   <div className="card card-side w-full h-36 bg-base-100 shadow-sm">
    <figure>    
        <img
        src={"https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"}
        alt="Movie" />
    </figure>
    <div className="card-body p-3">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.description}</p>
        <div className="card-actions flex justify-between items-center">
          <div className=""><p>${data.price}</p></div>
          <div className="flex flex-row gap-2 items-center">
              <button className="btn">-</button>
              <p className="text-lg text-neutral-400 p-4">1</p>
              <button className="btn">+</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default CartCard