import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <>
          <Navbar />
          
  {/* NAVBAR HOME KEPT SEPERATE BECAUSE THEY CANT BE INSIDE THE ROUTES  */}
  {/* SWITCH, DOES NOT WORK TO RAP AROUND ROUTES */}
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/products" element={<Products/>} />
      </Routes>
    </>
  );
}

export default App;
