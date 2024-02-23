import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Services from "./pages/Services";
import NavBar from "./components/NavBar";

// import { useActions } from "./hooks/useActions";

import "./App.scss";
function App() {
  // const { fetchBookings } = useActions();

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="/products" element={<Product title="Products" />} />
        <Route path="/services" element={<Services title="Services" />} />

        <Route path="/about" element={<Product title="About" />} />
      </Routes>
    </div>
  );
}

export default App;
