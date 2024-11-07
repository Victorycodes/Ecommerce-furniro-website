import React, { useState } from "react";
import Layout from "./components/Layout.jsx";
import HomePage from "./components/HomePage.jsx";
import ShopPage from "./components/ShopPage.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
