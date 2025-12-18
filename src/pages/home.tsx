import { useEffect, useState } from "react"
import Card from "../components/card"
import Footer from "../components/footer"
import Header from "../components/header"
import { data, type Clothe } from "../data"


function App() {
  const [products,setProducts]=useState<Clothe[]>([]);
  const [categories,setCategories]=useState<string[]>([])
  const handleFilter=()=>{

  }
  useEffect(()=>{
    setProducts(data);
    setCategories([...(new Set(data.map(Item=>Item.category)))])
  },[])  
  return (
    <div className="w-full max-w-[720px] h-full mx-auto">
      <Header />
      <div className="my-4 flex w-full justify-center">
        <div className="filter">
          <input className="btn filter-reset" type="radio" name="metaframeworks" aria-label="All"/>
          {categories.map(Item=><input key={Item} className="btn" type="radio" name="metaframeworks" aria-label={Item}/>)}
          </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {products.map((Item,index)=>{
          return <Card key={index}  data={Item}/>
        })}
      </div>
      <div className="w-full flex justify-center items-center py-3">
        <div className="join">
          <button className="join-item btn btn-active">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App