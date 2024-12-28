import './App.css'
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Components/Context/CartContext';
import HomePage from './Components/HomePage/HomePage'
import Header from './Components/Navigation/Header'
import ProductDescription from './Components/ProductDescription/ProductDescription'
import { Routes, Route } from 'react-router-dom';
import Wishlist from './Components/Wishlist/Wishlist';

function App() {


  return (
    <CartProvider>
     <Header/>
     <Routes>     
     <Route path="/" element={<HomePage/>} />
     <Route path="/products/:id" element={<ProductDescription/>} />
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/wishlist" element={<Wishlist/>}/>

    </Routes>
    </CartProvider>
  )
}

export default App
