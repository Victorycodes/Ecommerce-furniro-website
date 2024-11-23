import React, { useState } from "react";
import Layout from "./components/Layout.jsx";
import HomePage from "./components/HomePage.jsx";
import ShopPage from "./components/ShopPage.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import CartPage from "./components/CartPage.jsx";
import ProductComparison from "./components/ProductComparison.jsx";
import Checkout from "./components/Checkout.jsx";
import ContactPage from "./components/ContactPage.jsx";
import BlogPage from "./components/BlogPage.jsx";

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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
