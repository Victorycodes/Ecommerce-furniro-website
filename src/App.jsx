import React, { useState } from "react";
import Layout from "./components/Layout.jsx";
import HomePage from "./components/HomePage.jsx";
import ShopPage from "./components/ShopPage.jsx";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "shop":
        return <ShopPage />;
      default:
        return <HomePage />;
    }
  };

  return <Layout setCurrentPage={setCurrentPage}>
    {renderPage()}
    </Layout>;
};

export default App;
