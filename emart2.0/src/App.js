import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />{" "}
      </Routes>
    </>
  );
}

export default App;
