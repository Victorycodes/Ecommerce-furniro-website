import React from "react";
import "../css/Layout.css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div>
        <main>
          <Outlet/>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
