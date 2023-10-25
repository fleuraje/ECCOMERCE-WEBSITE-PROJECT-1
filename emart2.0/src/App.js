import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <>
          <Navbar />
          <Home />      
  {/* NAVBAR HOME KEPT SEPERATE BECAUSE THEY CANT BE INSIDE THE ROUTES  */}
  {/* SWITCH, DOES NOT WORK TO RAP AROUND ROUTES */}
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      {/* You can add a single product route here - you already have it set up. Use params (:id) */}
      </Routes>
    </>
  );
}

export default App;
