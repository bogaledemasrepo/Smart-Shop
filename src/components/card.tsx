
function Card({data}:{data:{
    product_id: string;
    name: string;
    category: string;
    price: number;
    in_stock: boolean;
    image_url: string;
    image_credit: string;
    description:string;
    variants: {
        color_name: string;
        size: string;
        stock_level: number;
    }[]}}) {
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
      <button className="btn btn-primary">Add Cart</button>
    </div>
  </div>
</div>
  )
}

export default Card