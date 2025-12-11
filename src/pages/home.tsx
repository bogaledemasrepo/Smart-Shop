import Card from "../components/card"
import Footer from "../components/footer"
import Header from "../components/header"
import { data } from "../data"


function App() {
  
  
  return (
    <div className="w-full max-w-[820px] h-full mx-auto">
      <Header />
      <div className="my-4 flex w-full justify-center">
        <div className="filter">
          <input className="btn filter-reset" type="radio" name="metaframeworks" aria-label="All"/>
          <input className="btn" type="radio" name="metaframeworks" aria-label="Sveltekit"/>
          <input className="btn" type="radio" name="metaframeworks" aria-label="Nuxt"/>
          <input className="btn" type="radio" name="metaframeworks" aria-label="Next.js"/>
        </div>
      </div>
      <div className="w-full flex gap-4 flex-wrap my-4 justify-center">
        {data.map((Item,index)=>{
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