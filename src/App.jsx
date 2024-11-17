import React, { useState } from "react";
import Layout from "./components/Layout.jsx";
import HomePage from "./components/HomePage.jsx";
import ShopPage from "./components/ShopPage.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import CartPage from "./components/CartPage.jsx";
import ProductComparison from "./components/ProductComparison.jsx";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-comparison" element={<ProductComparison />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
