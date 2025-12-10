import { useEffect, useState } from "react"
import Card from "../components/card"
import Footer from "../components/footer"
import Header from "../components/header"
const data=[
  {
    "product_id": "SKU007010",
    "name": "Classic Crewneck Sweater",
    "category": "Tops",
    "price": 45.00,
    "in_stock": true,
    "description": "A heavyweight, soft cotton-blend crewneck sweater, featuring a timeless design and comfortable fit. Perfect for layering in cooler months.",
    "image_url": "https://images.unsplash.com/photo-  -652ac237f372?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "image_credit": "Photo by Charles Etoroma on Unsplash",
    "variants": [
      {"color_name": "Forest Green", "size": "M", "stock_level": 35},
      {"color_name": "Navy Blue", "size": "XL", "stock_level": 18}
    ]
  },
  {
    "product_id": "SKU007011",
    "name": "Women's Wide-Leg Linen Pants",
    "category": "Bottoms",
    "price": 69.99,
    "in_stock": true,
    "description": "High-waisted, wide-leg trousers made from a cool, breathable linen blend. Features a tie waist and side pockets for a relaxed, elegant look.",
    "image_url": "https://images.unsplash.com/photo-1620023429381-169828236d14?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "image_credit": "Photo by Artem Beliaikin on Unsplash",
    "variants": [
      {"color_name": "Natural Linen", "size": "S", "stock_level": 25},
      {"color_name": "Black", "size": "L", "stock_level": 10}
    ]
  },
  {
    "product_id": "SKU007012",
    "name": "Oversized Denim Jacket",
    "category": "Outerwear",
    "price": 85.00,
    "in_stock": true,
    "description": "A classic denim jacket with an intentionally oversized fit and rugged construction. A perfect layering piece with four functional pockets.",
    "image_url": "https://images.unsplash.com/photo-1551480106-95f228d447f5?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "image_credit": "Photo by Lucas Andrade on Unsplash",
    "variants": [
      {"color_name": "Light Blue Wash", "size": "M", "stock_level": 40}
    ]
  },
  {
    "product_id": "SKU007013",
    "name": "Ribbed High-Neck Tank Top",
    "category": "Tops",
    "price": 19.99,
    "in_stock": true,
    "description": "A sleek, fitted tank top with a contemporary high neckline and fine vertical ribbing. Ideal as a base layer or worn on its own.",
    "image_url": "https://images.unsplash.com/photo-1622631584347-19e99217e944?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "image_credit": "Photo by Marcus Loke on Unsplash",
    "variants": [
      {"color_name": "White", "size": "XS", "stock_level": 70},
      {"color_name": "Gray", "size": "S", "stock_level": 55}
    ]
  },
  {
    "product_id": "SKU007014",
    "name": "Leather Chelsea Boots",
    "category": "Footwear",
    "price": 130.00,
    "in_stock": true,
    "description": "Premium full-grain leather Chelsea boots with elastic side panels and a durable stacked heel. Features a cushioned insole for all-day wear.",
    "image_url": "https://images.unsplash.com/photo-1563704289893-b1d3d637c35e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "image_credit": "Photo by Brooke Cagle on Unsplash",
    "variants": [
      {"color_name": "Brown", "size": "7", "stock_level": 20},
      {"color_name": "Black", "size": "10", "stock_level": 15}
    ]
  },
  {
    "product_id": "SKU007015",
    "name": "Knit Scarf & Beanie Set",
    "category": "Accessories",
    "price": 39.00,
    "in_stock": true,
    "description": "Coordinating set featuring a thick, chunky knit scarf and matching cuffed beanie. Made from a warm, soft acrylic yarn.",
    "image_url": "https://images.unsplash.com/photo-1576871271633-1493b8e4e941?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "image_credit": "Photo by NordWood Themes on Unsplash",
    "variants": [
      {"color_name": "Cream", "size": "OS", "stock_level": 60}
    ]
  },
  {
    "product_id": "SKU007016",
    "name": "Women's Satin Slip Dress",
    "category": "Dresses",
    "price": 75.00,
    "in_stock": false,
    "description": "A luxurious midi-length slip dress crafted from fluid satin fabric. Features delicate adjustable spaghetti straps and a subtle cowl neck.",
    "image_url": "https://images.unsplash.com/photo-1582234551151-e73715c03264?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "image_credit": "Photo by NordWood Themes on Unsplash",
    "variants": [
      {"color_name": "Champagne", "size": "M", "stock_level": 0},
      {"color_name": "Emerald Green", "size": "S", "stock_level": 5}
    ]
  },
  {
    "product_id": "SKU007017",
    "name": "Men's Performance Joggers",
    "category": "Bottoms",
    "price": 55.00,
    "in_stock": true,
    "description": "Tapered athletic joggers made from moisture-wicking stretch fabric. Includes zippered pockets and an elasticated waistband for training and casual wear.",
    "image_url": "https://images.unsplash.com/photo-1621297594519-5d4750a3168d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "image_credit": "Photo by Nathan Dumlao on Unsplash",
    "variants": [
      {"color_name": "Heather Gray", "size": "L", "stock_level": 45},
      {"color_name": "Black", "size": "S", "stock_level": 22}
    ]
  },
  {
    "product_id": "SKU007018",
    "name": "Aviator Sunglasses",
    "category": "Accessories",
    "price": 29.99,
    "in_stock": true,
    "description": "Classic aviator style sunglasses with a sleek metal frame and UV-protective tinted lenses. Includes a protective carrying case.",
    "image_url": "https://images.unsplash.com/photo-1610424694939-5a1e6a17b8f9?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "image_credit": "Photo by Nick Karvounis on Unsplash",
    "variants": [
      {"color_name": "Gold Frame/Brown Lens", "size": "OS", "stock_level": 110}
    ]
  },
  {
    "product_id": "SKU007019",
    "name": "Women's Cropped Hoodie",
    "category": "Tops",
    "price": 49.99,
    "in_stock": true,
    "description": "A soft, fleece-lined hoodie cut in a fashionable cropped length. Features a drawstring hood and ribbed cuffs for a casual, sporty look.",
    "image_url": "https://images.unsplash.com/photo-1622441999684-245f745163be?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "image_credit": "Photo by Charles Etoroma on Unsplash",
    "variants": [
      {"color_name": "Dusty Pink", "size": "M", "stock_level": 15},
      {"color_name": "Charcoal", "size": "L", "stock_level": 30}
    ]
  }
]

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
          return <Card key={index} data={Item}/>
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