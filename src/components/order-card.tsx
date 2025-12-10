function OrderCard() {
  return (
    <div className="bg-base-100 border-base-300 collapse border">
        <input type="checkbox" className="peer" />
        <div
            className="collapse-title border-gray-500 flex justify-between "
        >
            <p className="">How do I create an account?</p>
            <p className="">12/23/2024 G.C</p>
        </div>
        <div
            className="collapse-content border-gray-500"
        >
            <div className="w-full min-h-24 border-gray-500">
                <p className="text-xl bold">Hallo Worker</p>
            </div>
        </div>
    </div>
     
  )
}

export default OrderCard