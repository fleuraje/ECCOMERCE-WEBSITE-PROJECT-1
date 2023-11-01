import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import { CartProvider } from "./context/ShoppingCart";
import Cart from "./components/Cart" ;
function App() {
  return (
    <>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      </CartProvider>
    </>
  );
}

export default App;

