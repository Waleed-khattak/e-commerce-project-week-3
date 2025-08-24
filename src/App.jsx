import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import CheckOut from './pages/CheckOut';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'

function App() {
    const [cartItems, setCartItems] = useState([]);

    // Add product to cart
    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...prev, { ...product, quantity }];
            }
        });
    };

    return (
        <BrowserRouter>
            <Navbar cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/shop' element={<Shop addToCart={addToCart} />} ></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path="/ProductDetails/:id" element={<ProductDetails addToCart={addToCart} />} />
                <Route path="/ShoppingCart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path="/checkout" element={<CheckOut />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
