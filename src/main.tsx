import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './pages/home.tsx'
import CartPage from './pages/cart.tsx'
import OrdersPage from './pages/orders.tsx'
import ProfilePage from './pages/profile.tsx'
import UserProvider from './constext/user-context.tsx'
import CartProvider from './constext/cart-context.tsx'
import CheckoutPage from './pages/checkout.tsx'
import Detail from './pages/detail.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Smart-Shop">
      <UserProvider>
        <CartProvider>
          <Routes>
            <Route path='/' Component={App} />
            <Route path='/cart' Component={CartPage} />
            <Route path='/orders' Component={OrdersPage} />
            <Route path='/profile' Component={ProfilePage} />
            <Route path='/checkout' Component={CheckoutPage} />
            <Route path='/detail' Component={Detail} />
          </Routes>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
